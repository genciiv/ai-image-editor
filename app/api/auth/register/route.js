import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { transporter } from "@/lib/mail";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return Response.json(
        { error: "Email dhe password janë të detyrueshme" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return Response.json(
        { error: "Ky email ekziston tashmë" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        emailVerified: false,
        verificationToken,
        tokenExpires: new Date(Date.now() + 1000 * 60 * 60),
      },
    });

    const verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/verify-email?token=${verificationToken}`;

    await transporter.sendMail({
      from: `"AI Image Editor" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verifiko emailin tënd",
      html: `
        <h2>Verifiko llogarinë</h2>
        <p>Kliko linkun më poshtë për të aktivizuar llogarinë:</p>
        <a href="${verifyUrl}">Verifiko Email</a>
        <p>Ky link skadon për 1 orë.</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Kontrollo emailin për të verifikuar llogarinë.",
    });
  } catch (error) {
    console.log("REGISTER ERROR:", error);

    return Response.json(
      { error: "Register failed", details: error.message },
      { status: 500 }
    );
  }
}
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/auth/sign-in",
  },

  callbacks: {
    async signIn({ user }) {
      if (!user?.email) return false;

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            credits: 5,
            plan: "FREE",
            emailVerified: true,
          },
        });
      } else if (!existingUser.emailVerified) {
        await prisma.user.update({
          where: { email: user.email },
          data: {
            emailVerified: true,
          },
        });
      }

      return true;
    },

    async session({ session }) {
      if (session?.user?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: session.user.email },
        });

        if (dbUser) {
          session.user.id = dbUser.id;
          session.user.credits = dbUser.credits;
          session.user.plan = dbUser.plan;
          session.user.emailVerified = dbUser.emailVerified;
        }
      }

      return session;
    },
  },
};
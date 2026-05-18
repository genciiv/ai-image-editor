import { stripe } from "@/lib/stripe";

export async function POST() {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return Response.json(
        { error: "STRIPE_SECRET_KEY mungon në .env" },
        { status: 500 }
      );
    }

    if (!process.env.NEXT_PUBLIC_APP_URL) {
      return Response.json(
        { error: "NEXT_PUBLIC_APP_URL mungon në .env" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "AI Image Editor Pro",
              description: "Unlimited AI image editing",
            },
            unit_amount: 1900,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/settings?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/settings?canceled=true`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.log("STRIPE CHECKOUT ERROR:", error);

    return Response.json(
      {
        error: "Stripe checkout failed",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
const stripeAPI = require("stripe")(process.env.SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  const domainUrl = process.env.WEB_APP_URL;
  const { line_items, customer_email } = req.body;
  if (!line_items || !customer_email) {
    return res
      .status(400)
      .json({ error: "missing required session parameters" });
  }
  let session;
  try {
    session = await stripeAPI.checkout.sessions.create({
      payment_method_types: ["card", "ideal"],
      mode: "payment",
      line_items,
      customer_email,
      success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainUrl}/canceled`,
    });
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "an error occurred, unable to create session " });
  }
};
module.exports = createCheckoutSession;

const express = require("express");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_KEY);
const createCheckoutSession = require("./api/checkout");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: true }));

app.get("/api/menu", (req, res) => {
  res.json({
    categories: {
      drinks: {
        coffee: {
          name: "COFFEE",
          id: uuidv4(),
          items: [
            {
              id: uuidv4(),
              name: "espresso",
              price: "2.10",
            },
            {
              id: uuidv4(),
              name: "black coffee",
              price: "2.10",
            },

            {
              id: uuidv4(),
              name: "cappuccino",
              price: "2.40",
            },
            {
              id: uuidv4(),
              name: "latte",
              price: "2.40",
            },
            {
              id: uuidv4(),
              name: "espresso macchiato",
              price: "2.40",
            },
            {
              id: uuidv4(),
              name: "latte macchiaro",
              price: "2.80",
            },
            {
              id: uuidv4(),
              name: "flat white",
              price: "3.50",
            },
            {
              id: uuidv4(),
              name: "dubbele latte/cappuccino",
              price: "3.70",
            },
            {
              id: uuidv4(),
              name: "dubbele espresso",
              price: "3.20",
            },
            {
              id: uuidv4(),
              name: "irish coffee",
              price: "6.10",
            },
            {
              id: uuidv4(),
              name: "hot chocolate",
              price: "2.60",
            },
            {
              id: uuidv4(),
              name: "glass milk",
              price: "2",
            },
          ],
        },
        tea: {
          name: "TEA",
          id: uuidv4(),
          items: [
            { id: uuidv4(), name: "tea", price: "2.10" },
            { id: uuidv4(), name: "  fresh mint tea", price: "2.50" },
            { id: uuidv4(), name: "fresh ginger tea", price: "2.50" },
            { id: uuidv4(), name: "ginger mint tea", price: "2.80" },
          ],
        },

        soda: {
          name: "SODA",
          id: uuidv4(),
          items: [
            { id: uuidv4(), name: "cola", price: "2.30" },
            { id: uuidv4(), name: "cola light", price: "2.30" },
            { id: uuidv4(), name: "sprite", price: "2.30" },
            { id: uuidv4(), name: "fanta", price: "2.30" },
            { id: uuidv4(), name: "fanta cassis", price: "2.30" },
            { id: uuidv4(), name: "tonic", price: "2.30" },
            { id: uuidv4(), name: "bitter lemon", price: "2.30" },
            { id: uuidv4(), name: "ginger ale", price: "2.30" },
            { id: uuidv4(), name: "sparkling water ", price: "2.30" },
            { id: uuidv4(), name: "ice tea green", price: "2.30" },
            { id: uuidv4(), name: "ice tea peach", price: "2.30" },
          ],
        },
        extrafris: {
          name: "EXTRA FREIS",
          id: uuidv4(),
          items: [
            {
              id: uuidv4(),
              name: "elderflower(belvoir)",
              price: "3.50",
            },
            {
              id: uuidv4(),
              name: "ginger beer(belvoir)",
              price: "3.50",
            },
            {
              id: uuidv4(),
              name: "bionade(elderberry)",
              price: "3.50",
            },
            {
              id: uuidv4(),
              name: "bionade(orange-ginger)",
              price: "3.50",
            },
            { id: uuidv4(), name: "bionade(lemon)", price: "3.50" },
            {
              id: uuidv4(),
              name: "club mate(with caffeine)",
              price: "3.50",
            },
            {
              id: uuidv4(),
              name: "apple juice(flevo)",
              price: "2.30",
            },
            {
              id: uuidv4(),
              name: "pear juice (looza)",
              price: "2.40",
            },
            {
              id: uuidv4(),
              name: "tomato juice(looza)",
              price: "2.40",
            },
            {
              id: uuidv4(),
              name: "fresh orange juice",
              price: "3.20",
            },
          ],
        },
        beerondraft: {
          name: "BEER ON DRAFT",
          id: uuidv4(),
          items: [
            { id: uuidv4(), name: "grolsch pils (s)", price: "2.20" },
            { id: uuidv4(), name: "grolsch (m)", price: "2.40" },
            { id: uuidv4(), name: "grolsch (l)", price: "4.60" },
            { id: uuidv4(), name: "pitcher grolsch", price: "14" },
            {
              id: uuidv4(),
              name: "grolsch weizen (5.1%)",
              price: "4",
            },
            {
              id: uuidv4(),
              name: "grimbergen (changing)",
              price: "4",
            },
            { id: uuidv4(), name: "la chouffe (8%)", price: "4.20" },
            {
              id: uuidv4(),
              name: "grolsch (changeing draft)",
              price: "4",
            },
            {
              id: uuidv4(),
              name: "grolsch (proeverih)",
              price: "4.50",
            },
            {
              id: uuidv4(),
              name: "local changing tap ",
              price: "4.50",
            },
            { id: uuidv4(), name: "kunst kater", price: "3.20" },
          ],
        },
        beeronbottle: {
          name: "BEER ON BOTTLE",
          id: uuidv4(),
          items: [
            {
              id: uuidv4(),
              name: "vedett extra blond(5.2%)",
              price: "",
            },
            { id: uuidv4(), name: "duvel(8.5%)", price: "4.80" },
            {
              id: uuidv4(),
              name: "vedettm i.p.a(5.5%)",
              price: "4.30",
            },
            {
              id: uuidv4(),
              name: "oedipus(changing)",
              price: "4.50",
            },
            {
              id: uuidv4(),
              name: "browerij`t ij ijwit(6.5%)",
              price: "4.50",
            },
            {
              id: uuidv4(),
              name: "browerij`t ij zatte(8%)",
              price: "4.50",
            },
            {
              id: uuidv4(),
              name: "changing beer bottle",
              price: "4",
            },
            {
              id: uuidv4(),
              name: "mort subite kriek(4%)",
              price: "3.50",
            },
            {
              id: uuidv4(),
              name: "grolsch radler(2.5%)",
              price: "3",
            },
            { id: uuidv4(), name: "grolsch 0 %", price: "2.30" },
            {
              id: uuidv4(),
              name: "grolsch weizen 0 %",
              price: "3.50",
            },
            { id: uuidv4(), name: "magners cider", price: "4.80" },
          ],
        },
        wine: {
          name: "WINE",
          id: uuidv4(),
          items: [
            { id: uuidv4(), name: "red", price: "3.50" },
            { id: uuidv4(), name: "white", price: "3.50" },
            { id: uuidv4(), name: "rose", price: "3.50" },
            { id: uuidv4(), name: "red bottle", price: "18.50" },
            { id: uuidv4(), name: "white bottle", price: "18.50" },
            { id: uuidv4(), name: "rose bottle", price: "18.50" },
            { id: uuidv4(), name: "dow's port", price: "3.50" },
            { id: uuidv4(), name: "martini rosso", price: "3.50" },
            { id: uuidv4(), name: "martini blanco", price: "3.50" },
          ],
        },
        whiskey: {
          name: "WHISKEY",
          id: uuidv4(),
          items: [
            { id: uuidv4(), name: "jameson", price: "4.50" },
            { id: uuidv4(), name: "four roses", price: "4.50" },
            { id: uuidv4(), name: "jack daniels", price: "4.50" },
            {
              id: uuidv4(),
              name: "glenfiddich single malt 10 yr",
              price: "6",
            },
            {
              id: uuidv4(),
              name: "laphroaig single malt 10 yr",
              price: "6.50",
            },
            { id: uuidv4(), name: "joseph guy", price: "4.50" },
            { id: uuidv4(), name: "calvados", price: "4.50" },
            { id: uuidv4(), name: "remy martin vsop", price: "6.50" },
          ],
        },
        liqueur: {
          name: "LIQUEUR",
          id: uuidv4(),
          items: [
            { id: uuidv4(), name: "amaretto", price: "4.50" },
            { id: uuidv4(), name: "baileys", price: "4.50" },
            { id: uuidv4(), name: "cointreau", price: "4.50" },
            { id: uuidv4(), name: "drambuie", price: "4.50" },
            { id: uuidv4(), name: "liqueur 43", price: "4.50" },
            { id: uuidv4(), name: "grand marnier", price: "4.50" },
            { id: uuidv4(), name: "malibu", price: "4.50" },
            { id: uuidv4(), name: "tia maria", price: "4.50" },
            { id: uuidv4(), name: "sambuca", price: "4.50" },
            { id: uuidv4(), name: "southern comfort", price: "4.50" },
            { id: uuidv4(), name: "st.germain", price: "4.50" },
            { id: uuidv4(), name: "frangelico", price: "4.50" },
          ],
        },
        distilled: {
          name: "DISTILLED",
          id: uuidv4(),
          items: [
            {
              id: uuidv4(),
              name: "bombay sapphire gin",
              price: "4.50",
            },
            { id: uuidv4(), name: "tanqueray gin", price: "4.50" },
            { id: uuidv4(), name: "wodka", price: "4.50" },
            {
              id: uuidv4(),
              name: "verhoeven jonge jenever",
              price: "3",
            },
            { id: uuidv4(), name: "bokma oude jenever", price: "3" },
            { id: uuidv4(), name: "bols vieux", price: "3" },
            { id: uuidv4(), name: "sonnema beenburg", price: "3" },
            { id: uuidv4(), name: "bessenjenever", price: "3" },
            { id: uuidv4(), name: "apfelkorn", price: "3" },
            { id: uuidv4(), name: "campari", price: "3.50" },
            { id: uuidv4(), name: "julia grappa", price: "3.50" },
            { id: uuidv4(), name: "jagermeister", price: "3" },
            { id: uuidv4(), name: "bacardi superior", price: "4.50" },
            {
              id: uuidv4(),
              name: "pampero anejo especial",
              price: "4.80",
            },
            { id: uuidv4(), name: "tequilla gold", price: "4.50" },
            { id: uuidv4(), name: "tequilla silver", price: "4.50" },
            { id: uuidv4(), name: "pernod", price: "4.50" },
            { id: uuidv4(), name: "salmari", price: "3" },
          ],
        },
      },
      food: {
        sweet: {
          name: "SWEETS",
          id: uuidv4(),
          items: [
            { id: uuidv4(), name: "homemade cake", price: "3.50" },
            { id: uuidv4(), name: "banana", price: "1" },
            { id: uuidv4(), name: "whipped cream", price: "0.50" },
            {
              id: uuidv4(),
              name: "home made granola with honey with cinnamon",
              price: "2.60",
            },
            {
              id: uuidv4(),
              name: "banana honey and cinnamon",
              price: "3.20",
            },
            {
              id: uuidv4(),
              name: "tuti: homemade granola banana honey with cinnamon ",
              price: "3.60",
            },
          ],
        },
        tosti: {
          name: "TOSTI",
          id: uuidv4(),
          items: [
            { id: uuidv4(), name: "cheese", price: "3" },
            { id: uuidv4(), name: "cheese and ham", price: "3.60" },
            { id: uuidv4(), name: "pikant", price: "3.60" },
          ],
        },
        sandwich: {
          name: "SANDWICH",
          id: uuidv4(),
          items: [
            {
              id: uuidv4(),
              name: "dutch cheese with tomato cucumber and rocket (V)",
              price: "3.50",
            },
            {
              id: uuidv4(),
              name: "hummus tomato cucumber rocket",
              price: "3.50",
            },
            {
              id: uuidv4(),
              name: "mozzarella tomato pesto and rocket",
              price: "5",
            },
            { id: uuidv4(), name: "b.l.t", price: "5" },
            {
              id: uuidv4(),
              name: "sandwich of the week",
              price: "4.50",
            },
            { id: uuidv4(), name: "soup of the week", price: "5.50" },
          ],
        },
        bites: {
          name: "BITES",
          id: uuidv4(),
          items: [
            { id: uuidv4(), name: "hot nacho's", price: "8" },
            {
              id: uuidv4(),
              name: "bitter balls (7 pcs)",
              price: "5.90",
            },
            {
              id: uuidv4(),
              name: "mini cheese souflles (7 pcs)",
              price: "5.90",
            },
            {
              id: uuidv4(),
              name: "cheese sticks (7 pcs)",
              price: "5.90",
            },
            {
              id: uuidv4(),
              name: "chicken nuggets (7 pcs)",
              price: "",
            },
            {
              id: uuidv4(),
              name: "mix snacks small (12 pcs)",
              price: "10",
            },
            {
              id: uuidv4(),
              name: "chicken nuggets (7 pcs)",
              price: "",
            },
            {
              id: uuidv4(),
              name: "mix snacks big (20 pcs)",
              price: "16",
            },
            {
              id: uuidv4(),
              name: "chicken nuggets (7 pcs)",
              price: "",
            },
            {
              id: uuidv4(),
              name: "mix snacks small (12 pcs)",
              price: "10",
            },
            { id: uuidv4(), name: "mixed nuts", price: "2.80" },
            {
              id: uuidv4(),
              name: "bread with aioli and hummus",
              price: "4",
            },
            {
              id: uuidv4(),
              name: "nacho's with salsa",
              price: "3.20",
            },
            {
              id: uuidv4(),
              name: "nacho's with guacamole",
              price: "3.80",
            },
          ],
        },
      },
      extra: {
        mane: "EXTRA",
        id: uuidv4(),
        items: [
          { id: uuidv4(), name: "oat milk", price: "0.40" },
          { id: uuidv4(), name: "soj milk", price: "0.40" },
          { id: uuidv4(), name: "whipped cream", price: "0.50" },
          { id: uuidv4(), name: "syrup", price: "0.40" },
        ],
      },
      extra2: {
        mane: "EXTRA",
        id: uuidv4(),
        items: [
          { id: uuidv4(), name: "mayo", price: "0.40" },
          { id: uuidv4(), name: "ketchup", price: "0.40" },
          { id: uuidv4(), name: "curry", price: "0.50" },
          { id: uuidv4(), name: "chilly", price: "0.40" },
        ],
      },
    },
  });
});

app.post("/create-checkout-session", createCheckoutSession);

app.post("/payment-sheet", async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2020-08-27" }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "eur",
    customer: customer.id,
    payment_method_types: ["card", "ideal"],
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey:
      "pk_test_51Jqi9aAg50PTL4nV85GFOxlCbrQ9OdD8kghrsJ7WbDOr4FBkJFQCgu1k5xVqzzdyz2I8F93ktwDIYwmXVOKG0p6x00stWe4QlR",
  });
});

app.listen(PORT);

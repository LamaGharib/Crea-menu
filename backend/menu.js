res.json({
  menu: {
    food: {
      tosti: [
        { id: uuidv4(), name: "cheese", price: "3", img: "url" },
        { id: uuidv4(), name: "cheese and ham", price: "3.60", img: "url" },
        { id: uuidv4(), name: "pikant", price: "3.60", img: "url" },
      ],
      sandwich: [
        {
          id: uuidv4(),
          name: "dutch cheese with tomato cucumber and rocket (V)",
          price: "3.50",
          img: "url",
        },
        {
          id: uuidv4(),
          name: "hummus tomato cucumber rocket",
          price: "3.50",
          img: "url",
        },
        {
          id: uuidv4(),
          name: "mozzarella tomato pesto and rocket",
          price: "5",
          img: "url",
        },
        { id: uuidv4(), name: "b.l.t", price: "5", img: "url" },
        {
          id: uuidv4(),
          name: "sandwich of the week",
          price: "4.50",
          img: "url",
        },
        { id: uuidv4(), name: "soup of the week", price: "5.50", img: "url" },
      ],
    },
    drinks: {},
  },
});

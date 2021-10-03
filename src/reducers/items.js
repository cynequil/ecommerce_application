const products = [
  {
    id: 1,
    name: "Mobile",
    category: "category_1",
    image:
      "https://progameguides.com/wp-content/uploads/2021/09/Featured-Hardware-When-does-the-Apple-iPhone-13-release.jpg",
  },
  {
    id: 2,
    name: "PC",
    category: "category_1",
    image:
      "https://progameguides.com/wp-content/uploads/2021/09/Featured-Hardware-When-does-the-Apple-iPhone-13-release.jpg",
  },
  {
    id: 3,
    name: "Laptop",
    category: "category_1",
    image:
      "https://progameguides.com/wp-content/uploads/2021/09/Featured-Hardware-When-does-the-Apple-iPhone-13-release.jpg",
  },
  {
    id: 4,
    name: "Toaster",
    category: "category_2",
    image:
      "https://progameguides.com/wp-content/uploads/2021/09/Featured-Hardware-When-does-the-Apple-iPhone-13-release.jpg",
  },
  {
    id: 5,
    name: "Stove",
    category: "category_2",
    image:
      "https://progameguides.com/wp-content/uploads/2021/09/Featured-Hardware-When-does-the-Apple-iPhone-13-release.jpg",
  },
  {
    id: 6,
    name: "Dryer",
    category: "category_2",
    image:
      "https://progameguides.com/wp-content/uploads/2021/09/Featured-Hardware-When-does-the-Apple-iPhone-13-release.jpg",
  },
  {
    id: 7,
    name: "Camera",
    category: "category_3",
    image:
      "https://progameguides.com/wp-content/uploads/2021/09/Featured-Hardware-When-does-the-Apple-iPhone-13-release.jpg",
  },
  {
    id: 8,
    name: "TV",
    category: "category_3",
    image:
      "https://progameguides.com/wp-content/uploads/2021/09/Featured-Hardware-When-does-the-Apple-iPhone-13-release.jpg",
  },
];

const items = (state = products, action) => {
  switch (action.type) {
    case "RESET":
      return action.payload;
    case "CATEGORY_ITEMS":
      return state.filter((item) => action.payload === item.category);
    default:
      return state;
  }
};

export default items;

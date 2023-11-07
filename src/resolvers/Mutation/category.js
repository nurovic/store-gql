const Category = {
  createCategory: async (_, { categoryInput }, { db }) => {
    const CategoryDB = db.CategoryDB;
    const { CategoryTitle } = categoryInput;
    if (!CategoryTitle) {
      return {
        userErrors: [
          {
            message: "You have write category title!",
          },
        ],
        Category: null,
      };
    }
    const category = await CategoryDB.create({ categoryTitle: CategoryTitle });
    return {
      userErrors: [],
      category: category.categoryTitle,
    };
  },
};

module.exports = Category;

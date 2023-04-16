
const Review = {
  makeComment: async (parent, {createReviewInput}, { db }) => {
    console.log(parent)
    const ReviewDB = db.ReviewDB
    const productDB = db.ProductDB
    const {
        userId,
        productId,
        comment
    } = createReviewInput

    const resReview = await ReviewDB.create({
        userId,
        productId,
        comment
    })
    return resReview
  },
};

module.exports = Review;


const Review = {
  makeComment: async (parent, {createReviewInput}, { db }) => {
    const ReviewDB = db.ReviewDB

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

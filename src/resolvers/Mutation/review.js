const Review = {
  makeComment: async (parent, { createReviewInput }, { db, userInfo }) => {
    const ReviewDB = db.ReviewDB;

    const { productId, comment } = createReviewInput;

    const resReview = await ReviewDB.create({
      productId,
      comment,
      userId: userInfo.userId,
    });
    return resReview;
  },
};

module.exports = Review;

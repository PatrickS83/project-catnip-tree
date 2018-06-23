// Helper functions for liking/disliking posts
// Makes the postRoutes file more readable

function addLike(user, post) {
  post.likes += 1;
  user.liked.unshift(post.id);
}

function addDislike(user, post) {
  post.dislikes += 1;
  user.disliked.unshift(post.id);
}

function removeLike(user, post) {
  const index = user.liked.indexOf(post.id);
  user.liked.splice(index, 1);
  post.likes -= 1;
}

function removeDislike(user, post) {
  const index = user.disliked.indexOf(post.id);
  user.disliked.splice(index, 1);
  post.dislikes -= 1;
}

module.exports = { addLike, addDislike, removeLike, removeDislike };

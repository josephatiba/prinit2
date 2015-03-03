Template.posts.helpers({
  posts: function (){
    return Posts.find({}, {sort: {createdAt: 1}});
  },
  picture: function() {
    return Images.findOne({post: this._id});
  }
});

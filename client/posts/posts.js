Template.posts.helpers({
  posts: function (){
    return Posts.find({}, {sort: {createdAt: -1}});
  },
  picture: function () {
    console.log(this);
    return Images.findOne(this.params.picture);
  }
  // },
  // log: function () {
  //   console.log(this);
  // }
});

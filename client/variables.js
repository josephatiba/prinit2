Template.posts.posts = function(){
  return Posts.find({}, {sort: {createdAt: -1}});
}

Template.postform.isChecked = function(){
  return  Session.get('isChecked');
}

Template.posts.posts = function(){
  return Posts.find();
}

Template.postform.isChecked = function(){
  return  Session.get('isChecked');
}

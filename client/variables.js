Template.posts.posts = function(){
  return Posts.find();
}

Template.posts.adding_post = function(){
  return  Session.get('adding_post');
}
Router.configure({
  layoutTemplate:'layout'
});

Router.map(function() {
  this.route('home', {
    path:'/'
  });
  this.route('posts', {
    path:'/posts',
  });
  this.route('postform', {
    path:'/postform'
  });
}); 
Router.configure({
  layoutTemplate:'layout'
});

Router.map(function() {
  this.route('home', {
    path:'/'
  });
  this.route('posts', {
    path:'/posts',
    template: 'posts',
    data: function() { return Images.findOne(this.params.picture); }
  });
  this.route('postform', {
    path:'/postform'
  });
}); 
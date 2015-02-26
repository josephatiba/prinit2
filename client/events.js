Template.nav.events({
  'click .addPost': function(evt,tmpl){
    evt.preventDefault();
    Session.set('adding_post', true);
  }
});
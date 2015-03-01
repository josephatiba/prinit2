Template.postform.events({
  'change .checkbox input': function(event){
    Session.set('isChecked', event.target.checked); 
  },
  'click .save': function(evt, tmpl){
    var title = tmpl.find('.title').value;
    var description = tmpl.find('.description').value;
    var picture = tmpl.find('.picture').value;
    console.log(picture);
    Posts.insert({description:description, title:title, picture:picture, createdAt: new Date()});
  }
});

Template.postform.events({
  'change .checkbox input': function(event){
    Session.set('isChecked', event.target.checked); 
  },
  'click .save': function(evt, tmpl){
    var title = tmpl.find('.title').value;
    var description = tmpl.find('.description').value;
    var picture = tmpl.find('.picture').value;
    var pictureURL = "cfs/files/images/images-" + picture + "-IMG_2093.jpg";
    console.log(picture);
    Posts.insert({description:description, title:title, picture:picture, createdAt: new Date()});
    var test = Images.find( { _id: picture } );
    console.log(test);
  }
});

Template.postform.events({
  'change .checkbox input': function(event){
    Session.set('isChecked', event.target.checked); 
  }
});
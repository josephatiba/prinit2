Template.postform.events({
  'change .checkbox input': function(event){
    Session.set('isChecked', event.target.checked); 
  },
  'click .save': function(evt, tmpl){
    var title = tmpl.find('.title').value;
    var description = tmpl.find('.description').value;
    var baseprice = tmpl.find('.base-print-price').value;
    var ispublic = tmpl.find('.checkbox-value').value;
    var image = tmpl.find('.image').value.replace("C:\\fakepath\\", "/");
    var height = 400;
    Posts.insert({description:description, title:title, image:image, height:height, width:'25%', createdAt: new Date(), price:baseprice, ispublic:ispublic});
  }
});

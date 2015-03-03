AutoForm.hooks({
 postform: {
   after: {
     insert: function(error, result, template) {
       insertedFile = Posts.findOne(result).picture;
       Images.update({_id: insertedFile}, {$set: {'post': result}});
     }
   }
 }
});
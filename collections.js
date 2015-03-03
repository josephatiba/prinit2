var imageStore = new FS.Store.FileSystem("images", {
  path: "~/wdi/meteor/prinit2/prinit2/public/cfs/files/images" //optional, default is "/cfs/files" path within app container
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});



Likes = new Meteor.Collection("likes");


if (Meteor.isServer) {
      Images.allow({
      insert: function (fileID, doc) {
          return true;
      },
      update: function (fileID, doc) {
          return true;
      },
      remove: function(userId, doc) {
          return false;
      },
      download: function (fileID, doc) {
          return true;
      }
  });
}


var Schemas = {};

Posts = new Meteor.Collection('posts');

Schemas.Posts = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  description: {
    type: String,
    label: "Description",
    optional: true,
    max: 200
  },
  picture: {
      type: String,
      label: 'Choose file',
      autoform: {
        afFieldInput: {
          type: "fileUpload",
          collection: "Images"
        }
      }
    }
});

Posts.attachSchema(Schemas.Posts);



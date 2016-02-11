Posts = new Mongo.Collection('posts');
Posts.attachSchema(
  new SimpleSchema({
    title: {
      type: String
    },
    content: {
      type: String,
      autoform: {
        afFieldInput: {
          type: 'textarea',
          rows: 4
        }
      }
    }
  })
);

Admin.isAdmin = function (userId) {
  return true;
};

Admin.collections.add('Posts', {
  icon: 'pencil'
});

if (Meteor.isClient) {
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}

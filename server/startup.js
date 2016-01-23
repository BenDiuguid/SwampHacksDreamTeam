Meteor.startup(function() {
  if(Hunts.find().fetch().length === 0) {
    Meteor.call("insertMockData");
  }
});

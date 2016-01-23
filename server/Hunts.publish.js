Meteor.publish("hunts",function() {
  return Hunts.find();
});

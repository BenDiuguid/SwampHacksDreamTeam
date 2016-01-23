Meteor.methods({
  "insertMockData": function() {

    Hunts.insert({
      name: "Hunt1"
    });

    Hunts.insert({
      name: "Hunt2"
    });

    Hunts.insert({
      name: "Hunt3"
    });
    
  }
});

const Hunts = new Mongo.Collection("hunts");

const Location = Astro.Class({
  name: "Location",
  fields: {
    latitude: "number",
    longitude: "number"
  }
});

const Step = Astro.Class({
  name: "Step",
  fields: {
    hintText: "string",
    range: "number",
    location: "Step"
  }
});

const Hunt = Astro.Class({
  name: "Hunt",
  collection: Hunts,
  fields: {
    name: "string",
    steps: {
      type: "array",
      nested: "Step",
      default: function() {
        return [];
      }
    }
  }
});

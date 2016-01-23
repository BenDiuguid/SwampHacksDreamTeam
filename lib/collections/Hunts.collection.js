const Hunts = new Mongo.Collection("hunts");

const GPSLocation = Astro.Class({
  name: "GPSLocation",
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
    location: {
      type: "object",
      nested: "GPSLocation"
    }
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

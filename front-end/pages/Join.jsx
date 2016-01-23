const {
  Grid,
  Row,
  Col,
  Button
} = bootstrap;

Join = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    let handle = Meteor.subscribe("hunts");

    return {
      subsLoading: !handle.ready(),
      currentUser: Meteor.user(),
      hunts: Hunts.find().fetch()
    };
  },

  renderHunts() {
    return this.data.hunts.map( function(hunt) {
      return ( <JoinListItem key={hunt._id} name={hunt.name} />);
    });
  },

  render() {
    return (
      <Grid>
        <h1> <p className="text-center"> Join </p> </h1>
        <p className="text-center">{ this.renderHunts() }</p>
      </Grid>
    );
  }
});

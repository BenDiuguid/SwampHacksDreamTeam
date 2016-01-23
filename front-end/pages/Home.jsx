const {
  Grid,
  Row,
  Col
} = bootstrap;


Home = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  render() {
    return (
      <Grid>
        <h1>Scavenger Hunt</h1>
        <h2> <p className="text-center"> <a href="/create">Create Hunt</a> </p> </h2>
        <h2> <p className="text-center"> <a href="/join">Join Hunt</a> </p> </h2>
      </Grid>
    );
  }
});

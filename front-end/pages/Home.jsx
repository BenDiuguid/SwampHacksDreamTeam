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
        <h2> <a href="/create">Create Hunt</a> </h2>
        <h2> <a href="/join">Join Hunt</a> </h2>
      </Grid>
    );
  }
});

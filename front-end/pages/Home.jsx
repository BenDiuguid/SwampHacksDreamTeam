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
        <h2>Join Hunt</h2>
      </Grid>
    );
  }
});

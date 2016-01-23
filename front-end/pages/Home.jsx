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
        <h1>Join a Hunt!</h1>
      </Grid>
    );
  }
});

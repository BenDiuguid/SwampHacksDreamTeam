const {
  Row,
  Col,
  Button
} = bootstrap;

JoinListItem = React.createClass({


  render() {
    return (
      <p>
        <Button> {'Join ' + this.props.name} </Button>
      </p>
    );
  }
});

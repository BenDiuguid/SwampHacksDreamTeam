const {
  Grid,
  Row,
  Col,
  Button,
  Input
} = bootstrap;

Create = React.createClass({

  render() {
    return (
      <Grid>
        <h1><p className="text-center">Create</p></h1>
        <p className="text-center"><Input type="textarea" label="Hunt Name" placeholder="e.g., Best Hunt Ever!!" /></p>
      </Grid>


      /*<div>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <h1><p className="text-center">Create</p></h1>
            <p className="text-center"><Input type="textarea" label="Hunt Name" placeholder="e.g., Best Hunt Ever!!" /></p>
          </Col>
        </Row>
        <Row>
          <Col xs={8} md={8} lg={8}>

          </Col>
          <Col xs={4} md={4} lg={4}>

          </Col>
        </Row>
      </div>*/
    );
  }
});

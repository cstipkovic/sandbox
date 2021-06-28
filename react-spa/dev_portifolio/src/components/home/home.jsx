import React from "react";

import { Row, Col, Card } from "react-materialize";

const Home = () => {
  return (
    <Row>
      <Col m={3} s={12}>
        {/* <UserProfile /> */}
      </Col>
      <Col m={8} s={12}>
        <h5 className="subtitle">About me</h5>
        <Card>
          <div>
            <p>
              <b>Lorem</b>
            </p>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;

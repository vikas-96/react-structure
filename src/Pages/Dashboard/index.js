import React, { useState, useEffect } from "react";
import { dashboard } from "../../request/dashboard";
import { Row, Col } from "reactstrap";
import _ from "lodash";
import StatisticCard from "./StatisticCard";

const Dashboard = () => {
  const [statics, setStatics] = useState();

  async function fetchData() {
    await dashboard().then(res => setStatics(res));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (_.isEmpty(statics)) return <p>Loading...</p>;

  return (
    <React.Fragment>
      <Row className="mb-3">
        <Col md={3}>
          <StatisticCard
            color="success"
            iconClass="fa-phone fa-flip-horizontal"
            message="Users"
            messageLink="/user"
            count={statics.users}
          />
        </Col>
        <Col md={3}>
          <StatisticCard
            color="danger"
            iconClass="fa-phone fa-flip-horizontal"
            message="Borrower"
            messageLink="/borrower"
            count={statics.borrowers}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import { dashboard } from "../../request/dashboard";

const Dashboard = () => {
  const [statics, setStatics] = useState();

  async function fetchData() {
    await dashboard().then(res => setStatics(res));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return statics ? (
    <React.Fragment>
      <h5>Dashboard {statics.users}</h5>
    </React.Fragment>
  ) : (
    "Loading..."
  );
};

export default Dashboard;

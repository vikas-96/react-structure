import React, { useState, useEffect } from "react";
import { dashboard } from "../../request/dashboard";

const Dashboard = () => {
  const [statics, setStatics] = useState({});

  async function fetchData() {
    const res = await dashboard();
    console.log(res);
    // res.then(res => setStatics(res));
  }

  useEffect(() => {
    fetchData();
  });

  return <h5>dashboard</h5>;
};

export default Dashboard;

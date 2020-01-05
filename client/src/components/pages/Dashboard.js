import React, { useEffect, useContext } from "react";
import Recipes from "../recipes/Recipes";

const Dashboard = (props) => {

  return (
    <div className="container">
      <h1 className="flow-text">Your personal Backend</h1>
      <h4 className="flow-text">Update or delete your recipes here</h4>
      <Recipes />
    </div>
  );
};

export default Dashboard;

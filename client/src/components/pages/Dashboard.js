import React, { useEffect, useContext } from "react";
import Recipes from "../recipes/Recipes";
import AuthContext from "../../contexts/auth/AuthContext";

const Dashboard = (props) => {

  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    if(!isAuthenticated){
      props.history.push("/");
    }
    loadUser();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="col s12 l6">
      <h1 className="flow-text">Your personal Backend</h1>
      <h4 className="flow-text">Update or delete your recipes here</h4>
      <Recipes customClassName="dashboard-recipe-grid" location="dashboard"/>
    </div>
  );
};

export default Dashboard;

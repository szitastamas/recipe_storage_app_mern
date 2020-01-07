import React, { useEffect, useContext } from "react";
import Recipes from "../recipes/Recipes";
import AuthContext from "../../contexts/auth/AuthContext";
import AddRecipeForm from '../forms/AddRecipeForm'
// import AlertContext from "../../contexts/alert/AlertContext";
const Dashboard = props => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;
  // const alertContext = useContext(AlertContext);

  useEffect(() => {
    loadUser();

    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <div className="col s12 l6">
      <h1 className="flow-text">Your personal Backend</h1>
      <h4 className="flow-text">Update or delete your recipes here</h4>
      <AddRecipeForm />
      <Recipes customClassName="dashboard-recipe-grid" location="dashboard" />
    </div>
  );
};

export default Dashboard;

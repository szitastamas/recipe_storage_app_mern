import React, { Fragment } from "react";
import { LoadTheme } from "../../theme/LoadTheme";

const DashboardInfo = () => {
  const activeTheme = LoadTheme();

  const { bgColor, secondaryTextColor } = activeTheme;

  const infoItems = {
    add: {
      icon: "add",
      iconColor: "teal",
      p:
        "You can simply add a recipe by typing in its title and some description. If no photo chosen, a default picture will be attached."
    },
    add: {
      icon: "add",
      color: "teal",
      title: "Adding a recipe",
      p:
        "You can simply add a recipe by typing in its title and some description. If no photo chosen, a default picture will be attached."
    },
    edit: {
      icon: "edit",
      color: "green",
      title: "Update recipe",
      p:
        "You can simply update a recipe by clicking on the Edit button. Change the desired properties and click Save or discard any changes by clicking Cancel."
    },
    delete: {
      icon: "delete",
      color: "red",
      title: "Delete recipe",
      p:
        "Click on the Delete button to delete a recipe. Warning: this action cannot be reversed so make sure that you want to delete it!"
    }
  };

  return (
    <Fragment>
      <ul className="collection">
        {Object.values(infoItems).map(item => {
          return (
            <li className={`collection-item avatar ${bgColor}`}>
              <i className={`material-icons circle ${item.color}`}>
                {item.icon}
              </i>
              <span className={`title ${item.color}-text`}>{item.title}</span>
              <p
                className={`${secondaryTextColor}`}
                style={{ marginTop: ".6rem" }}
              >
                {item.p}
              </p>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default DashboardInfo;

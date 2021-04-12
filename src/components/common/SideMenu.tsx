/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";
import { Link } from "react-router-dom";

interface PropsType {
  menuList: Array<Object>;
}

interface MenuType {
  menu: any;
}

class Menu extends React.Component<MenuType> {
  render() {
    return (
      <li>
        <Link to={this.props.menu.path}>{this.props.menu.name}</Link>
      </li>
    );
  }
}

class SideMenu extends React.Component<PropsType> {
  render() {
    let menuMap = () => {
      return this.props.menuList.map((menu: any) => {
        return <Menu menu={menu} key={menu.path} />;
      });
    };

    return <div className="side-menu">{menuMap()}</div>;
  }
}

export default SideMenu;

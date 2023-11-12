import React, { useState } from "react";
import List from "../List/List";
import { LiaBedSolid, LiaUserCogSolid } from "react-icons/lia";
import useLogout from "../../hooks/useLogout";
import SidebarLink from "./SidebarLink/SidebarLink";
const Sidebar = () => {
  const { logout } = useLogout();
  return (
    <div className="sidebar">
      <List isCol>
        <SidebarLink path="/me">
          <LiaUserCogSolid className="sidebar__icon" />
          <span>Settings</span>
        </SidebarLink>{" "}
        <SidebarLink path="/addRoom">
          <LiaBedSolid className="sidebar__icon" />
          <span>Add Room</span>
        </SidebarLink>{" "}
      </List>
      <button className="sidebar__logout" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;

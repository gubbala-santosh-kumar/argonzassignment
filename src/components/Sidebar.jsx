import React from "react";
import HelpCenter from "./HelpCenter.jsx";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ icon, label, to, active }) => (
  <Link to={to} className={`sidebar-item ${active ? "active" : ""} clickable`}>
    <span className="material-icons">{icon}</span>
    <span className="label">{label}</span>
  </Link>
);


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="./public/assets/logo.png" alt="" />
        <div className="logo-mark">DNX</div>
      </div>

      <nav className="sidebar-nav">
        <SidebarItem
          icon="grid_view"
          label="Overview"
          to="/"
          active={location.pathname === "/"}
        />
        <SidebarItem
          icon="task_alt"
          label="Task"
          to="/tasks"
          active={location.pathname === "/tasks"}
        />
        <SidebarItem
          icon="supervisor_account"
          label="Mentors"
          to="/mentors"
          active={location.pathname === "/mentors"}
        />
        <SidebarItem
          icon="chat_bubble_outline"
          label="Message"
          to="#"
          active={false}
        />
        <SidebarItem icon="settings" label="Settings" to="#" active={false} />
      </nav>

      <div className="sidebar-footer">
        <div className="help-floating">
          <HelpCenter />
        </div>
      </div>
    </aside>
  );
}

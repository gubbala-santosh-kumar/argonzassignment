import React from "react";
import HelpCenter from "./HelpCenter.jsx";

const SidebarItem = ({ icon, label, active }) => (
  <div className={`sidebar-item ${active ? "active" : ""} clickable`}>
    <span className="material-icons">{icon}</span>
    <span className="label">{label}</span>
  </div>
);

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="./public/assets/logo.png" alt="" />
        <div className="logo-mark">DNX</div>
      </div>

      <nav className="sidebar-nav">
        <SidebarItem icon="grid_view" label="Overview" />
        <SidebarItem icon="task_alt" label="Task" />
        <SidebarItem icon="supervisor_account" label="Mentors" active />
        <SidebarItem icon="chat_bubble_outline" label="Message" />
        <SidebarItem icon="settings" label="Settings" />
      </nav>

      <div className="sidebar-footer">
        <div className="help-floating">
          <HelpCenter />
        </div>
      </div>
    </aside>
  );
}

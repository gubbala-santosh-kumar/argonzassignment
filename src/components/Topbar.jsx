import React from "react";

export default function Topbar({
  search,
  setSearch,
  onCategoryClick,
  onSortClick,
}) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="page-title">Explore Mentors</h1>
        <div className="search-wrapper">
          <input
            className="search-input"
            placeholder="Search Mentors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="material-icons search-icon">search</span>
        </div>
      </div>

      <div className="topbar-right">
        <button className="chip clickable" onClick={onCategoryClick}>
          <span className="material-icons">grid_view</span> Category
        </button>
        <button className="chip clickable" onClick={onSortClick}>
          <span className="material-icons">tune</span> Sort By : Popular
        </button>

        <div className="profile">
          <img src="/assets/avatar1.jpg" alt="profile" />
        </div>
      </div>
    </header>
  );
}

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import mentorsData from "../data/mentors";
import RecentCarousel from "../components/RecentCarousel";
import MentorCard from "../components/MentorCard";
import HelpCenter from "../components/HelpCenter";

export default function MentorsPage() {
  const [mentors] = useState(mentorsData);
  const [search, setSearch] = useState("");
  const [followState, setFollowState] = useState({}); // id: true
  const [sort, setSort] = useState("popular");

  const onFollowToggle = (id) => {
    setFollowState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const onCategoryClick = () =>
    alert("Category filter clicked (implement as needed)");
  const onSortClick = () =>
    setSort((s) => (s === "popular" ? "rating" : "popular"));

  const filtered = mentors
    .filter(
      (m) =>
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.role.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "popular" ? b.tasks - a.tasks : b.rating - a.rating
    );

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-area">
        <Topbar
          search={search}
          setSearch={setSearch}
          onCategoryClick={onCategoryClick}
          onSortClick={onSortClick}
        />

        <div className="content">
          <RecentCarousel
            mentors={mentors}
            followState={followState}
            onFollowToggle={onFollowToggle}
          />

          <section className="mentors-grid-section">
            <h2 className="section-title">Mentors</h2>

            <div className="mentors-grid">
              {filtered.map((m) => (
                <MentorCard
                  key={m.id}
                  mentor={m}
                  onFollowToggle={onFollowToggle}
                  isFollowed={!!followState[m.id]}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

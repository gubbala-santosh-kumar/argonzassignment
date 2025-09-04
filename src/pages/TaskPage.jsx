import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import tasksData from "../data/tasksData";
import TaskCard from "../components/TaskCard";
import NewTask from "../components/NewTask";
import TaskLimit from "../components/TaskLimit";
import HelpCenter from "../components/HelpCenter";

export default function TaskPage() {
  const [tasks] = useState(tasksData);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recent");

  const onCategoryClick = () =>
    alert("Category filter clicked (implement as needed)");
  const onSortClick = () =>
    setSort((s) => (s === "recent" ? "progress" : "recent"));

  const filtered = tasks
    .filter(
      (t) =>
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "recent"
        ? b.id.localeCompare(a.id)
        : b.subtasks.completed / b.subtasks.total -
          a.subtasks.completed / a.subtasks.total
    );

  const searchFilter = (t) =>
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    t.category.toLowerCase().includes(search.toLowerCase());

  const timeLimitTasks = tasks.filter(
    (t) => t.section === "timeLimit" && searchFilter(t)
  );
  const newTasks = tasks.filter(
    (t) => t.section === "newTask" && searchFilter(t)
  );

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-area">
        <Topbar
          pageType="task"
          search={search}
          setSearch={setSearch}
          onCategoryClick={onCategoryClick}
          onSortClick={onSortClick}
        />
        <div className="content">
          <TaskLimit tasks={timeLimitTasks} />
          <NewTask tasks={newTasks} />
          <HelpCenter />
        </div>
      </main>
    </div>
  );
}

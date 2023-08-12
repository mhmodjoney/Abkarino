import React from "react";
import "./maincard.css";

const MainCard = () => {
  return (
    <div className="main-card">
      <h2 className="main-card-title">Courses We Provide</h2>
      <ul className="course-list">
        <li className="course-item">
          <a href="/courses/english">English</a>
        </li>
        <li className="course-item">
          <a href="/courses/math">Math</a>
        </li>
        <li className="course-item">
          <a href="/courses/science">Science</a>
        </li>
        {/* Add more courses as needed */}
      </ul>
    </div>
  );
};

export default MainCard;

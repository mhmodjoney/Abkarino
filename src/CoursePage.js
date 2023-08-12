import React from "react";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const { courseName } = useParams();

  return (
    <div>
      <header>{/* Add your header content here */}</header>
      <main>
        <h2>{courseName}</h2>
        <img src={`${courseName}-image.jpg`} alt={courseName} />
        <p>{courseName} description goes here.</p>
        {/* Add more content specific to the course */}
      </main>
    </div>
  );
};

export default CoursePage;

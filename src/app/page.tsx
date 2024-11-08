
"use client"; 

import React from "react";
import StudentCard from "../components/StudentCard"; 
import students from "../data/students";
import "./globals.css"; 

const HomePage = () => {
  return (
    <div className="container">
      <h1>Student ID Cards</h1>
      <div className="card-grid">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            roll={student.roll}
            className={student.className}
            day={student.day}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;


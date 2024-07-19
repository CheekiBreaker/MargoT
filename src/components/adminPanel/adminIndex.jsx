import React, { useState, useEffect } from "react";
import CourseForm from "./LessonForm";

const Body = () => {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    sections: [],
  });

  useEffect(() => {
    const courseId = window.location.pathname.split("/").pop();
    if (courseId) {
      // Загрузить курс с сервера по идентификатору courseId
      // и установить его в состояние course.
    }
  }, []);

  const handleCourseChange = (data) => {
    setCourse(data);
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    if (course.id) {
      // Обновить курс на сервере.
    } else {
      // Создать новый курс на сервере.
    }
  };

  return (
    <div>
      <h1>{course.id ? "Редактирование курса" : "Создание курса"}</h1>
      <CourseForm
        course={course}
        onChange={handleCourseChange}
        onSubmit={handleCourseSubmit}
      />
    </div>
  );
};
export default Body;

import React, { useState } from "react";
import SectionForm from "./SectionForm";

const LessonForm = ({ lesson, onChange, onSubmit }) => {
  const [title, setTitle] = useState(lesson.title);
  const [description, setDescription] = useState(lesson.description);
  const [sections, setSections] = useState(lesson.sections);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onChange({ ...lesson, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    onChange({ ...lesson, description: e.target.value });
  };

  const handleSectionAdd = () => {
    setSections([...sections, { type: "radio", options: [] }]);
    onChange({
      ...lesson,
      sections: [...sections, { type: "radio", options: [] }],
    });
  };

  const handleSectionChange = (index, data) => {
    const newSections = [...sections];
    newSections[index] = data;
    setSections(newSections);
    onChange({ ...lesson, sections: newSections });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Название урока: 
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Описание урока:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <button type="button" onClick={handleSectionAdd}>
        Добавить раздел
      </button>
      {sections.map((section, index) => (
        <SectionForm
          key={index}
          section={section}
          index={index}
          onChange={handleSectionChange}
        />
      ))}
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default LessonForm;

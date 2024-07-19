import React, { useState } from "react";

const SectionForm = ({ section, index, onChange }) => {
  const [type, setType] = useState(section.type);
  const [options, setOptions] = useState(section.options);

  const handleTypeChange = (e) => {
    setType(e.target.value);
    onChange(index, { ...section, type: e.target.value });
  };

  const handleOptionAdd = () => {
    setOptions([...options, ""]);
    onChange(index, { ...section, options: [...options, ""] });
  };

  const handleOptionChange = (optionIndex, e) => {
    const newOptions = [...options];
    newOptions[optionIndex] = e.target.value;
    setOptions(newOptions);
    onChange(index, { ...section, options: newOptions });
  };

  return (
    <div>
      <label>
        Тип раздела:
        <select value={type} onChange={handleTypeChange}>
          <option value="radio">Радио-тест</option>
          <option value="dropdown">Выпадающий список</option>
          <option value="fill-in-the-blank">Заполнение пробелов</option>
        </select>
      </label>
      {type === "radio" && (
        <>
          <label>
            Варианты ответа:
            {options.map((option, optionIndex) => (
              <input
                key={optionIndex}
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(optionIndex, e)}
              />
            ))}
          </label>
          <button type="button" onClick={handleOptionAdd}>
            Добавить вариант
          </button>
        </>
      )}
    </div>
  );
};

export default SectionForm;

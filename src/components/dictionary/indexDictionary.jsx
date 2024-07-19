import React from "react";
import "./dictionaryStyle.scss";
const Body = () => {
  return (
    <body>
      <section className="content__dictionary">
        <div className="Dictionary">
          <form
            className="search__word"
            action="https://dictionary.cambridge.org/ru/%D0%B8%D1%81%D0%BA%D0%B0%D1%82%D1%8C/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9/direct/"
            method="get"
            target="_blank"
          >
            <input
              name="q"
              placeholder="Search English"
              type="search"
              title="search"
              dir="auto"
              role="textbox"
              autocomplete="off"
              aria-controls="search"
              aria-multiline="false"
              aria-expanded="false"
              aria-label="Search"
              aria-required="true"
              aria-invalid="false"
            />
            <button title="Search" type="submit">
              <img src="https://dictionary.cambridge.org/ru/external/images/freesearch/search.png?version=5.0.388" />
            </button>
          </form>
          <div className="word">
            <h1 className="Word">N Word</h1>
            <h3 className="descWord">Description</h3>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Body;

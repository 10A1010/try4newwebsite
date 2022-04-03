import { useState } from "react";

const ChaptersScreen = ({ chapters, chapterHandler }) => {
  const [activeId, setActiveId] = useState("");

  return (
    <div className='min-vh-100 bg-red bg-transparent '>
      <h1 className='fs-5 fw-bold r '>Chapters</h1>
      <ul className='list-group bg-transparent text-end'>
        { chapters.map((chapter) => (
            chapter.id <= 34 ? (
            <div key={chapter.id}>
              <li
                onClick={(e) => {
                  chapterHandler(chapter)
                  setActiveId(chapter.id)
                }}
                className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between curser ${
                  chapter.id === activeId && 'active'
                }`}
              >
                <span >{chapter.id} - </span> <span>{chapter.name_arabic}</span>
              </li>
            </div>
          ) : (
          <div className='text-center'>
            <span className='spinner-border'></span>
          </div>
        )))}
      </ul>
    </div>
  );
};

export default ChaptersScreen;

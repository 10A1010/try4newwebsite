import { useState } from "react";
import tafAli from "./tafAliDesc.json";

const ChaptersScreen = ({  chapterHandler }) => {
  const [activeId, setActiveId] = useState("");

  return (
    <div className='min-vh-100 bg-red bg-transparent '>
      <h1 className='fs-5 fw-bold r '>Taabo si aad u Dhageysato </h1>
      <ul className='list-group bg-transparent text-end'>
        <li>
          {Array.from(Array(134), (e, i) => {
            return (
              <li
                key={i}
                onClick={(e) => {
                  chapterHandler(i+1);
                  setActiveId(i);
                }}
                className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between curser ${
                  i === activeId && "active"
                }`}
              >
                <span>Muxaadaro - </span> <span>{i + 1}</span>
              </li>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default ChaptersScreen;

import React, { useState } from "react";
import radicals from "./data";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Radical = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    show ? setShow(false) : setShow(true);
    console.log(show);
  };

  const { img, radical, pinyin, translation, examples } = radicals[index];

  const checkNumber = (number) => {
    if (number > radicals.length - 1) {
      return 0;
    }
    if (number < 0) {
      return radicals.length - 1;
    }
    return number;
  };

  const prevRadical = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextRadical = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomRadical = () => {
    setIndex(() => {
      let newIndex = Math.floor(Math.random() * radicals.length);
      if (newIndex === index) {
        newIndex = index + 1;
      }
      return checkNumber(newIndex);
    });
  };

  return (
    <article>
      <div className="radical-container">
        <h2 className="line">{radical}</h2>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevRadical}>
            <FaChevronLeft />
          </button>
          <button className="rand-btn" onClick={randomRadical}>
            Random
          </button>
          <button className="next-btn" onClick={nextRadical}>
            <FaChevronRight />
          </button>
        </div>
        <button className="answer-btn" onClick={toggleShow}>
          Check
        </button>
      </div>
      <div className={show ? "answer-show" : "answer-hide"}>
        <img src={img} alt={translation} />
        <p className="line">{pinyin}</p>
        <p className="line">{translation}</p>
        <p className="line">{examples}</p>
      </div>
    </article>
  );
};

export default Radical;

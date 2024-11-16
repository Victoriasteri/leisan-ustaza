import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";

const counts = [
  { name: "Книги", value: 4 },
  { name: "Лет опыта", value: 7 },
];

const ExpertAreas = () => {
  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      Немного о
                      <br />
                      моем опыте
                    </span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    Я закончила пед колледж, институт и Медресе. У меня есть
                    дипломы о пед образовании. Также есть иджазы, шахады, и
                    другие интересные слова)
                  </p>
                  <p>
                    Я преподаю арабский с 2007 года. Онлайн с 2014 года.
                    Преподавала разных уроки, науки и преподаю сейчас...
                  </p>
                </div>
                <div className="orido_tm_boxed_button">
                  <a href="https://t.me/+g_TB0JykaQJkYzdi">
                    Мой канал
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpertAreas;

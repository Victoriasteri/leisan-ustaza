import { Fragment, useEffect, useState } from "react";
import { Servicehashtag } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "История ниспослания и собирания Корана",
    img: "img/book_1.jpg",
    description: [
      "Данное пособие представляет собой конспекты лекций, раскрывающих основные вопросы, связанные с историей ниспослания Священного Корана. Пособие основано на достоверных хадисах и высказываниях ученых. Адресовано преподавателям и студентам духовных учебных заведений. Рекомендовано для преподавания в медресе и онлайн школах.",
    ],
  },
  {
    name: "Что после смерти",
    img: "img/book_2.JPG",
    description: ["Описание добавть позже"],
  },

  {
    name: "Дорога в вечность. Обряды похорон в исламе",
    img: "img/book_3.jpg",
    description: ["Описание добавть позже"],
  },
  {
    name: "Хочу понимать Коран",
    img: "img/book_4.jpg",
    description: ["Описание добавть позже"],
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Servicehashtag();
  }, [current]);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="orido_tm_section" id="service">
        <div className="orido_tm_service">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>Мои книги</span>
              </h3>
            </div>
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li className={current == i ? "current" : ""} key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <span className="number">{`0${i + 1}`}</span>
                        <h3 className="title">{service.name}</h3>
                      </div>
                      <div className="right">
                        <div className="text">
                          <p>{service.description[0].substring(0, 105)}...</p>
                        </div>
                        <div className="arrow">
                          <img
                            className="svg"
                            src="img/svg/top-arrow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        className="orido_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                          setCurrent(i);
                        }}
                      />
                      {/* Modalbox Info Start */}
                      <img
                        className="popup_service_image"
                        src={service.img}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <span className="ccc" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Services;

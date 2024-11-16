import Image from "next/image";
import { useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="orido_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <Image
                src="/img/quran-green.png"
                alt="logo"
                width={50}
                height={50}
              />
            </a>
          </div>
          <div className="trigger" onClick={() => setToggle(!toggle)}>
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home">Главная</a>
            </li>
            <li>
              <a href="#about">Обо мне</a>
            </li>
            <li>
              <a href="#service">Услуги</a>
            </li>
            <li>
              <a href="#portfolio">Мои книги</a>
            </li>
            {/* <li>
              <a href="#blog">Blog</a>
            </li> */}
            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;

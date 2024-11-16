import Image from "next/image";

const Header = ({ dark }) => {
  return (
    <div className="orido_tm_header">
      <div className="header_in">
        <div className="logo">
          <a href="#">
            <Image
              src="/img/leisan-black.png"
              alt="logo"
              width={159}
              height={48}
            />
          </a>
        </div>
        <div className="menu">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home">Главная</a>
            </li>
            <li>
              <a href="#about">Обо мне</a>
            </li>

            <li>
              <a href="#service">Мои книги</a>
            </li>

            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>
          <span className="ccc" />
        </div>
        <div className="button">
          <a
            href="https://themeforest.net/user/codeefly/portfolio"
            target="_blank"
          >
            Напишите мне
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;

import Image from "next/image";

const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          {/* <div className="left">
            <div className="box">
              <h3 className="year">7+</h3>
              <span className="experience">лет опыта</span>
              <h3 className="name">Лет опыта</h3>
            </div>
          </div> */}
          <div className="left">
            <div className="box">
              <Image
                src="/img/quran-pink.png"
                alt="Muslim"
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>Обо мне</span>
              </h3>
            </div>
            <div className="text">
              <p>
                Моя миссия - ОБУЧИТЬ ПОНИМАНИЮ СЛОВ АЛЛАХА И НАУЧИТЬ ПРИМЕНЯТЬ
                КОРАН В ЖИЗНИ, РУКОВОДСТВОВАТЬСЯ ИМ И ДОСТИГАТЬ ВЫСОКИХ СТЕПЕНЕЙ
                РАЯ, через знание сур и аятов.
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="img/cv/1.jpg" download>
                  Мои книги
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>
              {/* <img src="img/signature.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

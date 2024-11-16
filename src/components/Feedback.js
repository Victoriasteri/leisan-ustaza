const Feedback = ({ dark }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Отзывы
                <br />
                моих учениц
              </span>
            </h3>
          </div>
          <div className="testimonials_in">
            <img src="img/woman-2.png" alt="" />
            <div className="info">
              <div className="text">
                <p>
                  “ДжазакиЛлаху хайрон, устаза. Слушаю ваши уроки. Ма шаа Аллах
                  так мне понравились, так глубоко вы все разбираете, пословно
                  каждый аят, каждое слово. Хоть я и не разбираюсь в арабских
                  словах, но понимаю, что в дальнейшем ин шаа Аллах буду
                  проходить у вас мединский курс, до этого всегда боялась, так
                  как думала, что не справлюсь, но слушая как вы проводите
                  уроки, разжевываете каждое слово, появилось больше
                  уверенности. Аллаhумма барик, устаза. Пусть Аллах обрадует вас
                  Раем Фирдаус за все те знания, которые вы передаете сестрам.
                  ❤️❤️❤️”
                </p>
              </div>
              <div className="details">
                <h3 className="name">
                  <span>Усманова Эма</span>
                </h3>
                <span className="job">24.09.2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;

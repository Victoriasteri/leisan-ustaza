import Image from "next/image";

const Contact = () => {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <Image src="/img/contacts.png" alt="" width={500} height={500} />
            <div className="text">
              <h3>Придумать текст</h3>
              <p>
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="https://t.me/LeisanMilay">
                Напишите мне
                <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Телефон:</span>
                  <p>
                    <a className="line_effect" href="#">
                      +1 (234) 567 890
                    </a>
                  </p>
                </li>
                <li>
                  <span className="name">Почта:</span>
                  <p>
                    <a className="line_effect" href="#">
                      support@smith.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Я в соцсетях:</span>
                <ul>
                  <li>
                    <a href="#">
                      <img className="svg" src="img/svg/social/be.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="img/svg/social/dribbble.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="img/svg/social/instagarm.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;

import { TypeAnimation } from "react-type-animation";
import img from "@/assets/img/hero/img.jpg";

const Home = () => {
  const handleScrollToAbout = () => {
    const section = document.querySelector("#about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="arlo_tm_section" id="home">
      <div className="arlo_tm_hero_header_wrap">
        <div className="arlo_tm_universal_box_wrap">
          <div className="bg_wrap">
            <div className="overlay_image hero jarallax" data-speed="0.1"></div>
            <div className="overlay_color hero"></div>
          </div>
          <div className="content hero">
            <div className="inner_content">
              <div className="image_wrap">
                <img src={img} alt="hero" />
              </div>
              <div className="name_holder">
                <h3>
                  Timmy <span>Nguyen</span>
                </h3>
              </div>
              <div className="text_typing">
                <p>
                  I'm a{" "}
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Freelance",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "Web Developer",
                      2000,
                      "We produce food for Hamsters",
                      3000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="arlo_tm_arrow_wrap bounce anchor">
            <a href="#" onClick={(e) => handleScrollToAbout()}>
              <i className="xcon-angle-double-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

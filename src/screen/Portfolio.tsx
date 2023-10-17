import { isMobile } from "react-device-detect";
import Leftpart from "../components/Leftpart";
import Preloader from "../components/Preloader";
import Rightpart from "../components/Rightpart";
import Menu from "../components/mobile/Menu";
import { FloatButton } from "antd";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [showLeftpart, setShowLeftpart] = useState<boolean>(false);

  useEffect(() => {
    if (isMobile) {
      setShowLeftpart(true);
    }
  }, [isMobile]);

  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close">
          <a href="#"></a>
        </span>
      </div>

      <Preloader />
      {/* mobile menu */}
      <Menu />
      {/* mobile menu */}

      <div className="arlo_tm_content">
        {/* left */}
        <Leftpart
          showLeftpart={showLeftpart}
          setShowLeftpart={setShowLeftpart}
        />

        <Rightpart
          showLeftpart={showLeftpart}
          setShowLeftpart={setShowLeftpart}
        />

        {/* <a className="arlo_tm_totop" href="#"></a> */}
        <FloatButton.BackTop tooltip={<div>Scroll to top</div>} />
      </div>
    </div>
  );
};

export default Portfolio;

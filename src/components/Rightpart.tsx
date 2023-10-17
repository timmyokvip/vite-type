import About from "./content/About";
import Contact from "./content/Contact";
import Home from "./content/Home";
import Project from "./content/Project";
import Skill from "./content/Skill";
interface IProps {
  showLeftpart: boolean;
  setShowLeftpart: (value: boolean) => void;
}

const Rightpart = (props: IProps) => {
  return (
    <div
      className={
        props.showLeftpart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"
      }
    >
      <div className="rightpart_inner">
        <Home />
        {/* {/* <!-- /ABOUT --> */}
        <About />
        {/* <!-- SKILLS --> */}
        <Skill />
        {/* <!-- Project --> */}
        <Project />

        {/* <!-- CONTACT & FOOTER --> */}
        <Contact />
        {/* <!-- /CONTACT & FOOTER --> */}
      </div>
    </div>
  );
};

export default Rightpart;

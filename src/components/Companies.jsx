import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
} from "../assets/index";
import { styles } from "../util/styles";
import Logos from "./elements/Logos";

function Companies() {
  return (
    <section className="py-12">
      <div className={`${styles.container} flex-col text-center`}>
        <p className="mb-10 text-gray-700/50">
          Trusted by forward-thinking software teams around the world
        </p>
        <ul className="grid grid-cols-7 gap-x-16">
          <Logos src={logo1} />
          <Logos src={logo2} />
          <Logos src={logo3} />
          <Logos src={logo4} />
          <Logos src={logo5} />
          <Logos src={logo6} />
          <Logos src={logo7} />
        </ul>
      </div>
    </section>
  );
}

export default Companies;

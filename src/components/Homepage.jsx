import Whitebtn from "./elements/Whitebtn";
import Bluebtn from "./elements/Bluebtn";
import { styles } from "../util/styles";
import { Homepageimg } from "../assets";

function Homepage() {
  return (
    <section className="homepage py-36 bg-linear-[180deg,#F2F9FF1F,#F2F9FF] max-h-[878px] mb-32">
      <div className={`${styles.container} flex-col text-center`}>
        <h1 className="text-[56px] leading-14 font-medium text-sky-950 pb-7">
          Good design meets
          <br /> great user experience
        </h1>
        <p className="text-gray-700 pb-7">
          For everyone, from beginners to experts
        </p>
        <div className="buttons flex justify-center items-center mb-8">
          <Bluebtn text={"Buy Digits"} />
          <Whitebtn text={"See the Features"} />
        </div>
        <img
          className="mx-auto"
          src={Homepageimg}
          alt="vector image"
          width="977"
          height="585"
        />
      </div>
    </section>
  );
}

export default Homepage;

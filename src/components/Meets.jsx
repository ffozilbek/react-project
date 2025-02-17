import { meetbg } from "../assets";
import { styles } from "../util/styles";
import Bluebtn from "./elements/Bluebtn";

function Meets() {
  return (
    <section className={`meets bg-yellow-100/60 py-36 h-[1000px] relative`}>
      <div className={`${styles.container} flex-col text-center`}>
        <h1 className="text-blue-950 font-500 text-5xl mb-10">
          Simplicity meets innovative design
        </h1>
        <p className="max-w-[500px] text-gray-700 mx-auto pb-10">
          It's really easy to start using Digits. Install the theme, choose a
          demo and start designing the future of your business!
        </p>
        <div>
          <Bluebtn text={"Buy digits"} />
        </div>
      </div>
      <img className="absolute bottom-0 left-0" src={`${meetbg}`} alt="" />
    </section>
  );
}

export default Meets;

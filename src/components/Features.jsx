import { graphic, design, easycontent, fast } from "../assets";
import { styles } from "../util/styles";
import Card from "./elements/Card";

function Features() {
  return (
    <section className="features py-24">
      <div className={`${styles.container} flex-col`}>
        <h1 className="text-center mx-auto text-5xl font-medium text-blue-950">
          Whatever work you do,
          <br /> we're able to help
        </h1>
        <div className="features flex items-center">
          <img
            className="mr-auto"
            src={graphic}
            alt="workers"
            width="611"
            height="932"
          />
          <div className="features-cards">
            <Card
              img={design}
              title={"Design and Assets"}
              text={
                "Make your brand stand out with pixel-perfect design crafted to perfection."
              }
            />
            <Card
              img={easycontent}
              title={"Easy Content"}
              text={
                "Import your demos or build pages visually. Bonus: All images and illustrations included!"
              }
            />
            <Card
              img={fast}
              title={"Fast and Reliable"}
              text={
                "No heavy-weight plugins. No builders. No unneccesary file loading. Pure WordPress."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

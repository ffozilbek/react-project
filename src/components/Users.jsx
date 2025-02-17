import { styles } from "../util/styles";
import User from "./elements/User";

function Users() {
  return (
    <section className="pt-36 pb-40">
      <div className={`${styles.container} flex-col`}>
        <h1 className="font-medium text-sky-950 text-5xl mx-auto">
          What others are saying
        </h1>
      </div>
    </section>
  );
}

export default Users;

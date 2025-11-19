import styles from "./Location.module.css";
import MainTitle from "../common/MainTitle";

export default function Location({ id }) {
  return (
    <section id={id}>
      <MainTitle title={"Location"} />
    </section>
  );
}

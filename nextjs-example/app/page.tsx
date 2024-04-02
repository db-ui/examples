import Image from "next/image";
import styles from "./page.module.css";
import { DBButton, DBCard } from "@db-ui/react-components";

type ShowCardProps = {
  density: string; //  TODO: DB UI import for all valid densities. In general exports for types should exist
};
const ShowCard = (props: ShowCardProps) => {
  return (
    <DBCard data-density={props.density} className={styles.card}>
      <h5>{props.density}</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, odit
        harum? Veritatis, error! Incidunt at blanditiis quos fuga assumenda sint
        laborum itaque porro laudantium quo? Ducimus, quasi? Provident, autem
        inventore!
      </p>
      <DBButton type={"button"} variant="brand">
        Test
      </DBButton>
    </DBCard>
  );
};

export default function Home() {
  return (
    <main>
      <h1>Showroom</h1>
      <div className={styles.cards}>
        {["functional", "regular", "expressive"].map((density) => (
          <ShowCard key={density} density={density} />
        ))}
      </div>
    </main>
  );
}

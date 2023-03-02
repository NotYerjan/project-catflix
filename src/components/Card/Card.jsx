import "./Card.css";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardBody from "./CardBody";

export default function Card(props) {
  return (
    <article className="card">
      <CardImage image={props.imageSrc} alt={props.imageAlt} />
      <CardHeader />
      <CardBody />
      <CardFooter />
    </article>
  );
}

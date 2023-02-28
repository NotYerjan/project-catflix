import "./Card.css";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardMain from "./CardMain";

export default function Card(props) {
  return (
    <article className="card">
      <CardImage image={props.image} />
      <CardHeader />
      <CardMain />
      <CardFooter />
    </article>
  );
}

import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.imageSource} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.details}</p>
    </section>
  );
};

export default MeetupDetail;

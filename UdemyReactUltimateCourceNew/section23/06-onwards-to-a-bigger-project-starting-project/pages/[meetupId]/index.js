import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";

const DetailsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups | {props.meetupData.title}</title>
        <meta description="Highly active meetups!" />
      </Head>
      <MeetupDetail
        title={props.meetupData.title}
        imageSource={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://oskar:12345!!RekoIdag!@cluster0.jt1b7.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  const convertedMeetups = meetups.map((meetup) => ({
    params: { meetupId: meetup._id.toString() },
  }));

  client.close();
  return {
    fallback: true,
    paths: convertedMeetups,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://oskar:12345!!RekoIdag!@cluster0.jt1b7.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}
export default DetailsPage;

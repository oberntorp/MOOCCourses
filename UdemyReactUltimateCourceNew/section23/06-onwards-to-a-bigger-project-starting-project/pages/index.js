import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Turning_Torso_3.jpg/1024px-Turning_Torso_3.jpg",
    address: "Malmgatan 3, 22233 Malmstad",
    description: "My first meetup",
  },
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Turning_Torso_3.jpg/1024px-Turning_Torso_3.jpg",
    address: "Malmgatan 3, 22233 Malmstad",
    description: "My first meetup",
  },
];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   // access to request and response via  req and res
//   context.req
//   context.res
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://oskar:12345!!RekoIdag!@cluster0.jt1b7.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await (
    await meetupsCollection.find().toArray()
  ).map((meetup) => ({
    id: meetup._id.toString(),
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
  }));
  client.close();
  return {
    props: {
      meetups: meetups,
    },
    revalidate: 10, // Makes sure that the page is regenerated on the server, every x second
  };
}

export default HomePage;

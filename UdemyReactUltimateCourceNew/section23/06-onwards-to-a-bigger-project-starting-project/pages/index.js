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
const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;

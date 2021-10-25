import MeetupDetail from "../../components/meetups/MeetupDetail";

const DetailsPage = () => {
  return (
    <MeetupDetail
      title="A first meetup"
      imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Turning_Torso_3.jpg/1024px-Turning_Torso_3.jpg"
      address="Malmgatan 3, 22233 Malmstad"
      description="My first meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A first meetup",
        imageSource:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Turning_Torso_3.jpg/1024px-Turning_Torso_3.jpg",
        address: "Malmgatan 3, 22233 Malmstad",
        description: "My first meetup",
      },
    },
  };
}
export default DetailsPage;

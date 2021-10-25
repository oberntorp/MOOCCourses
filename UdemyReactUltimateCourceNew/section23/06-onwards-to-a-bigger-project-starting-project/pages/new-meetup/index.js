import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage = (props) => {
  const router = useRouter();

  const onAddMeetupHandler = async (meetupData) => {
    const result = await fetch("/api/new-meetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meetupData),
    });
    const data = await result.json();
    console.log(data);

    router.replace("/");
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetupPage;

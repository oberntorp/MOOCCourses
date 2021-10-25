// our-domain.com/api/new-meetup
// POST our-domain.com/api/new-meetup

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const client = await MongoClient.connect(
      "mongodb+srv://oskar:12345!!RekoIdag!@cluster0.jt1b7.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(req.body);
    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;

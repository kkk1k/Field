import PocketBase from "pocketbase";

export default async function Message({type, name, title, text, email, phoneNumber}) {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const data = {
    Name: name,
    Type: type,
    Phone: phoneNumber,
    Email: email,
    Title: title,
    Content: text,
  };

  await pb.collection("Message").create(data);
}

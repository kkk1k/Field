import PocketBase from "pocketbase";

export async function Department() {
  try {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const records = await pb.collection("department").getFullList();
    return records;
  } catch (error) {
    return "nothing";
  }
}

export async function AlbumMain() {
  try {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const records = await pb.collection("Album").getFullList();
    return records;
  } catch (error) {
    return "nothing";
  }
}

// 위에서 나온 id쓰세요

export async function AlbumDetail() {
  try {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const records = await pb.collection("Album").getFirstListItem(`title="${id}"`, {
      expand: "image, date",
    });
    return records;
  } catch (error) {
    return "nothing";
  }
}

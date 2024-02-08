import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.REACT_APP_URL);

export function CampApi(year) {
  return pb.collection("camp").getFullList({
    filter: `year=${year}`,
  });
}

export function CampyearApi() {
  return pb.collection("campyear").getFullList();
}

export function NewsApi(selectCategory) {
  return pb.collection("News").getFullList({
    filter: `category="${selectCategory}"`,
  });
}

export function NewsMonthApi(title) {
  return pb.collection("NewsDetail").getFullList({
    filter: `newsId="${title}"`,
  });
}

export function NewsDetailApi(id) {
  return pb.collection("NewsDetail").getFirstListItem(`newsId="${id}"`, {
    expand: "contents",
  });
}

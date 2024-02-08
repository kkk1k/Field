import PocketBase from "pocketbase";

export async function NewsListByCategory(category) {
  try {
    const pb = new PocketBase("https://field.pockethost.io");
    const resultList = await pb.collection("news").getList(1, 50, {
      filter: `category = "${category}"`,
    });
    const item = resultList.items;
    return item;
  } catch (error) {
    return "nothing";
  }
}

export async function NewsDetail(id) {
  try {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const record = await pb.collection("NewsDetail").getFirstListItem(`NewsId="${id}"`, {
      expand: "Athor,Time,Content,File",
    });
    return record;
  } catch (error) {
    return "nothing";
  }
}

// 여기 밑에 아이디는 NewsDetail에서 나온 id사용하시면됩니다.

export async function NewsMonth(id) {
  try {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const record = await pb.collection("NewsDetail").getFirstListItem(`NewsId="${id}"`, {
      expand: "Img",
    });
    return record;
  } catch (error) {
    return "nothing";
  }
}

NewsListByCategory("month")
  .then(result => {
    console.log("데이터 가져오기 성공:", result);
    items = result;
    console.log(items[0].id);
  })
  .catch(error => {
    console.error("에러 발생:", error);
  });

NewsMonth(`${items[0].id}`)
  .then(result => {
    console.log("데이터 가져오기 성공!!!!!:", result.img1);
    image = result.img1;
  })
  .catch(error => {
    console.error("에러 발생!!!:", error);
  });

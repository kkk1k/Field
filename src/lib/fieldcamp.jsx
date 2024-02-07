import PocketBase from "pocketbase";

// export default async function getAllCampList() {
//   const pb = new PocketBase(process.env.REACT_APP_URL);
//   try {
//     const records = await pb.collection("camp").getFullList({
//       sort: "title",
//     });
//     return records;
//   } catch (error) {
//     return "nothing";
//   }
// }

// 여기 id도 위에서 꺼낸 id로 검색

// getAllCampList()
//   .then(result => {
//     console.log("데이터 가져오기 성공:", result);
//     items = result;
//   })
//   .catch(error => {
//     console.error("에러 발생:", error);
//   });

// fieldcampTopic(id)
//   .then(result => {
//     console.log("데이터 가져오기 성공:", result);
//     items = result;
//   })
//   .catch(error => {
//     console.error("에러 발생:", error);
//   });

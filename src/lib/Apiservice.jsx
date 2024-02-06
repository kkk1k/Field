import React from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.REACT_APP_URL);

export default function CampApi(year) {
  return pb.collection("camp").getFullList();
}

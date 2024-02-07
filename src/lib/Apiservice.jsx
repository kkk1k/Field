import React from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://field.pockethost.io/");

export default function CampApi(year) {
  return pb.collection("camp").getFullList();
}

import { takeEvery } from "redux-saga/effects";
import ShopActionTypes from "./shops.types";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");
}

export function* fetchCollectionsStart() {
  // takes nonblocking call
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

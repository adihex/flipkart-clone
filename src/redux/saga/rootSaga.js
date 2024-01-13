import { all } from "redux-saga/effects";
import {
  getCategoriesWatcher,
  getCategoriesWiseProductWatcher,
} from "./product/product.watcher";

export function* rootSaga() {
  let array = [getCategoriesWatcher(), getCategoriesWiseProductWatcher()];
  yield all(array);
}

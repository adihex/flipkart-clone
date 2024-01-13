import { takeLatest } from "redux-saga/effects";
import { getCategoryData, getCategoryWiseProductData } from "../../product.slice";
import {
  getCategoriesHandler,
  getCategoriesWiseProductHandler,
} from "./product.handler";

export function* getCategoriesWatcher() {
  yield takeLatest(getCategoryData.type, getCategoriesHandler);
}

export function* getCategoriesWiseProductWatcher() {
  yield takeLatest(
    getCategoryWiseProductData.type,
    getCategoriesWiseProductHandler
  );
}

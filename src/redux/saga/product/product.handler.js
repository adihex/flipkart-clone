import { call, put } from "redux-saga/effects";
import { saveCategories, saveProduct } from "../../product.slice";
import { getCategoriesService, getCategoriesWiseProductService } from "./product.service";

export function* getCategoriesHandler() {
  try {
    let data = yield call(getCategoriesService);
    yield put(saveCategories(data));
  } catch (error) {
    alert("server error");
  }
}

export function* getCategoriesWiseProductHandler(action) {
  try {
    let data = yield call(getCategoriesWiseProductService,action.payload);
    yield put(saveProduct(data));
  } catch (error) {
    alert("server error");
  }
}

import ShopActionTypes from "./shops.types";

export const updateCollections = (collections) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});

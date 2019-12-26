import { UPDATE_COLLECTIONS } from './shops.types';

export const updateCollections = collections => {
  return {
    type: UPDATE_COLLECTIONS,
    payload: collections
  };
};

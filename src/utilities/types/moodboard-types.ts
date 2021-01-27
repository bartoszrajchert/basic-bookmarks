import { ICollections } from './firebase-types';

export type ICollectionDocument = ICollections & {
  id: string;
};

import { atom } from 'recoil';
import { ICollectionDocument } from '../utilities/types/moodboard-types';

const collectionsState = atom<ICollectionDocument[]>({
  key: 'collectionsState',
  default: [],
});

export default collectionsState;

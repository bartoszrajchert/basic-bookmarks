import { atom } from 'recoil';
import { IBookmarksGroupsDoc } from '../utilities/types/moodboard-types';

const bookmarksGroupsState = atom<IBookmarksGroupsDoc[]>({
  key: 'bookmarksGroupsState',
  default: [],
});

export default bookmarksGroupsState;

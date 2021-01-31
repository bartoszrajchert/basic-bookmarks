import { atom, selector } from 'recoil';
import { IBookmarksGroupsDoc } from '../utilities/types/moodboard-types';

export const bookmarksGroupsState = atom<IBookmarksGroupsDoc[]>({
  key: 'bookmarksGroupsState',
  default: [],
});

export const idsOfBookmarksGroupState = selector({
  key: 'idsOfBookmarksGroupsState',
  get: ({ get }) => {
    const groups = get(bookmarksGroupsState);
    return groups.map((group) => group.id);
  },
});

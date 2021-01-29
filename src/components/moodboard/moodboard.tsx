import React from 'react';
import { useRecoilState } from 'recoil';
import Collection from './collection';
import { IBookmarksGroupsDoc } from '../../utilities/types/moodboard-types';
import bookmarksGroupsState from '../../store/moodboard-store';

const Moodboard = () => {
  const [collections] = useRecoilState(bookmarksGroupsState);

  return collections.length === 0 ? (
    <p className="align-middle text-center">Loading...</p>
  ) : (
    <div>
      {collections.map((collection: IBookmarksGroupsDoc) => (
        <Collection key={collection.id} data={collection} />
      ))}
    </div>
  );
};

export default Moodboard;

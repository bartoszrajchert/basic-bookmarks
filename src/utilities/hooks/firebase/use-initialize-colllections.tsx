import { useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { dbGetCollection } from '../../helpers/firebase-helpers';
import { bookmarksGroupsState } from '../../../store/moodboard-store';

const useInitializeCollections = () => {
  const [initialized, setInitialized] = useState(false);
  const setBookmarksGroups = useSetRecoilState(bookmarksGroupsState);

  useEffect(() => {
    if (initialized) return;

    dbGetCollection().then((newGroups) => {
      setBookmarksGroups(newGroups);
    });

    setInitialized(true);
  }, [initialized, setBookmarksGroups]);
};

export default useInitializeCollections;

import { useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import collectionsState from '../../../store/moodboard-store';
import { dbGetCollection } from '../../helpers/firebase-helpers';

const useInitializeCollections = () => {
  const [initialized, setInitialized] = useState(false);
  const setCollections = useSetRecoilState(collectionsState);

  useEffect(() => {
    if (initialized) return;

    dbGetCollection().then((newCollection) => {
      setCollections(newCollection);
    });

    setInitialized(true);
  }, [initialized, setCollections]);
};

export default useInitializeCollections;

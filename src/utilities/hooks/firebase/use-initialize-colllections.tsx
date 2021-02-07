import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { dbGetCollection } from '../../helpers/firebase-helpers';
import { groupsFetchedAction } from '../../../store/actions';

const useInitializeCollections = () => {
  const [initialized, setInitialized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialized) return;

    dbGetCollection().then((newGroups) => {
      dispatch(groupsFetchedAction(newGroups));
    });

    setInitialized(true);
  }, [dispatch, initialized]);
};

export default useInitializeCollections;

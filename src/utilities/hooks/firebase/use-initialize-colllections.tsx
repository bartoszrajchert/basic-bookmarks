import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncFetchGroups } from '../../../store/actions/thunk-actions';

const useInitializeCollections = () => {
  const [initialized, setInitialized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialized) return;

    dispatch(asyncFetchGroups());

    setInitialized(true);
  }, [dispatch, initialized]);
};

export default useInitializeCollections;

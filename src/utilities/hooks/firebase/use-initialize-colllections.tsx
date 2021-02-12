import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  dbGetCollection,
  dbGetGroupsOrder,
  dbSetGroupsOrder,
} from '../../helpers/firebase-helpers';
import { groupsFetchedAction } from '../../../store/actions/groups-actions';
import { setGroupsOrderAction } from '../../../store/actions/groups-order-actions';
import { TBookmarksGroups, TGroupsOrder } from '../../types/moodboard-types';

const useInitializeCollections = () => {
  const [initialized, setInitialized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialized) return;

    const data: {
      groups: TBookmarksGroups;
      order: TGroupsOrder;
    } = { groups: {}, order: [] };

    dbGetCollection().then((newGroups) => {
      dispatch(groupsFetchedAction(newGroups));
      data.groups = newGroups;

      dbGetGroupsOrder().then((newOrder) => {
        dispatch(setGroupsOrderAction(newOrder));
        data.order = newOrder;

        if (Object.keys(data.groups).length !== data.order.length) {
          // eslint-disable-next-line no-console
          console.error('INTEGRATION FAILED - RESETTING ORDER');
          dbSetGroupsOrder(Object.keys(data.groups)).then();
          dispatch(setGroupsOrderAction(Object.keys(data.groups)));
        }
      });
    });

    setInitialized(true);
  }, [dispatch, initialized]);
};

export default useInitializeCollections;

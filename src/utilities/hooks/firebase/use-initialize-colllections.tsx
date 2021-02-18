import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { groupsFetchedAction } from '../../../store/actions/groups-actions';
import { setGroupsOrderAction } from '../../../store/actions/groups-order-actions';
import { TBookmarksGroups, TGroupsOrder } from '../../types/moodboard-types';
import { dbGetGroup, dbSetGroupsOrder } from '../../helpers/firebase';

const useInitializeCollections = () => {
  const [initialized, setInitialized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialized) return;

    const data: {
      groups: TBookmarksGroups;
      order: TGroupsOrder;
    } = { groups: {}, order: [] };

    dbGetGroup().then((newGroups) => {
      dispatch(groupsFetchedAction(newGroups.groups));
      data.groups = newGroups.groups;

      dispatch(setGroupsOrderAction(newGroups.order));
      data.order = newGroups.order;

      if (Object.keys(data.groups).length !== data.order.length) {
        // eslint-disable-next-line no-console
        console.error('INTEGRATION FAILED - RESETTING ORDER');
        dbSetGroupsOrder(Object.keys(data.groups)).then();
        dispatch(setGroupsOrderAction(Object.keys(data.groups)));
      }
    });

    setInitialized(true);
  }, [dispatch, initialized]);
};

export default useInitializeCollections;

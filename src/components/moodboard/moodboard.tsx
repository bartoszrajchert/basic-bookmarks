import React, { useState } from 'react';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { useDispatch, useSelector } from 'react-redux';
import Collection from './collection';
import SortableItem from '../utility/dnd-kit/sortable-item';
import { TBookmarksGroups, TGroupsOrder } from '../../utilities/types/moodboard-types';
import { dbSetGroupsOrder } from '../../utilities/helpers/firebase-helpers';
import { setGroupsOrderAction } from '../../store/actions/groups-order-actions';

const Moodboard = () => {
  const [activeId, setActiveId] = useState('');
  const groups = useSelector<{ groups: TBookmarksGroups }, TBookmarksGroups>(
    (state) => state.groups,
  );

  const orderGroups = useSelector<{ groupsOrder: TGroupsOrder }, TGroupsOrder>(
    (state) => state.groupsOrder,
  );

  const dispatch = useDispatch();

  const handleDragStart = (event: { active: any; over: any }) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;

    setActiveId('');

    if (active.id !== over.id) {
      const oldIndex = orderGroups.findIndex((groupNode) => groupNode === active.id);
      const newIndex = orderGroups.findIndex((groupNode) => groupNode === over.id);
      const newOrder = arrayMove([...orderGroups], oldIndex, newIndex);

      dispatch(setGroupsOrderAction(newOrder));
      dbSetGroupsOrder(newOrder).then();
    }
  };

  const getActiveGroup = groups[activeId];

  return orderGroups.length === 0 || orderGroups.length > Object.keys(groups).length ? (
    <p className="align-middle text-center">Loading...</p>
  ) : (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={orderGroups} strategy={verticalListSortingStrategy}>
        {orderGroups.map((id) => (
          <SortableItem key={id} id={id}>
            <Collection data={groups[id]} className={activeId === id ? 'opacity-40' : ''} />
          </SortableItem>
        ))}
      </SortableContext>
      <DragOverlay
        dropAnimation={{
          duration: 500,
          easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
        }}
      >
        {activeId || typeof getActiveGroup !== 'undefined' ? (
          <Collection data={getActiveGroup} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Moodboard;

import React, { useState } from 'react';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { useDispatch, useSelector } from 'react-redux';
import Collection from './collection';
import SortableItem from '../utility/dnd-kit/sortable-item';
import { IBookmarksGroupsDoc } from '../../utilities/types/moodboard-types';
import { swapGroupsAction } from '../../store/actions';

const Moodboard = () => {
  const groups = useSelector<{ groups: IBookmarksGroupsDoc[] }, IBookmarksGroupsDoc[]>(
    (state) => state.groups,
  );
  const dispatch = useDispatch();

  const [activeId, setActiveId] = useState('');

  const handleDragStart = (event: { active: any; over: any }) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;

    setActiveId('');

    if (active.id !== over.id) {
      const oldIndex = groups.findIndex((groupNode) => groupNode.id === active.id);
      const newIndex = groups.findIndex((groupNode) => groupNode.id === over.id);

      dispatch(swapGroupsAction(oldIndex, newIndex));
    }
  };

  const getActiveGroup = groups.find((group) => group.id === activeId);
  const groupsIds = groups.map((group) => group.id);

  return groups.length === 0 ? (
    <p className="align-middle text-center">Loading...</p>
  ) : (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={groupsIds} strategy={verticalListSortingStrategy}>
        {groupsIds.map((id, index) => (
          <SortableItem key={id} id={id}>
            <Collection data={groups[index]} className={activeId === id ? 'opacity-40' : ''} />
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
          /* @ts-ignore */
          <Collection data={getActiveGroup} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Moodboard;

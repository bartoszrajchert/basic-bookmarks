import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import Collection from './collection';
import { bookmarksGroupsState, idsOfBookmarksGroupState } from '../../store/moodboard-store';
import SortableItem from '../utility/dnd-kit/sortable-item';

const Moodboard = () => {
  const [collections, setCollections] = useRecoilState(bookmarksGroupsState);
  const [activeId, setActiveId] = useState('');
  const collectionsId = useRecoilValue(idsOfBookmarksGroupState);

  const handleDragStart = (event: { active: any; over: any }) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;

    setActiveId('');

    if (active.id !== over.id) {
      setCollections((items) => {
        const oldIndex = items.findIndex((group) => group.id === active.id);
        const newIndex = items.findIndex((group) => group.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const getActiveGroup = collections.find((collection) => collection.id === activeId);

  return collections.length === 0 ? (
    <p className="align-middle text-center">Loading...</p>
  ) : (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={collectionsId} strategy={verticalListSortingStrategy}>
        {collectionsId.map((id, index) => (
          <SortableItem key={id} id={id}>
            <Collection data={collections[index]} className={activeId === id ? 'opacity-0' : ''} />
          </SortableItem>
        ))}
      </SortableContext>
      <DragOverlay
        style={{ backgroundColor: 'red', color: 'red' }}
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

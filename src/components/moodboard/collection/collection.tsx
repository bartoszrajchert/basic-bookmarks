import React, { useState } from 'react';
import { closestCenter, DndContext, DragOverlay } from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import Header from './header';
import Bookmark from './bookmark';
import EViewType from '../../../utilities/enums/collection';
import { IBookmarksGroupsDoc } from '../../../utilities/types/moodboard-types';
import { dbUpdateGroupView } from '../../../utilities/helpers/firebase-helpers';
import SortableItem from '../../utility/dnd-kit/sortable-item';

type CollectionProps = {
  data: IBookmarksGroupsDoc;
  attributes?: any;
  listeners?: any;
  className?: string;
};

const Collection = ({ data, attributes, listeners, className }: CollectionProps) => {
  const [viewType, setViewType] = useState(data.view);
  const [name] = useState(data.name);

  const [bookmarks, setBookmarks] = useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
  const [activeId, setActiveId] = useState('');

  const changeViewType = async (newView: EViewType) => {
    await dbUpdateGroupView(data.id, newView);

    setViewType(newView);
  };

  const handleDragStart = (event: { active: any; over: any }) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;

    setActiveId('');

    if (active.id !== over.id) {
      setBookmarks((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className={['mb-64', className].join(' ')}>
      <Header
        collectionViewType={viewType}
        onTypeChange={(type) => changeViewType(type)}
        name={name}
        groupId={data.id}
        draggableAttributes={attributes}
        draggableListeners={listeners}
      />
      <div className="mt-16 flex flex-wrap gap-x-40 gap-y-24">
        <DndContext
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={bookmarks} strategy={rectSortingStrategy}>
            {bookmarks.map((id) => (
              <SortableItem key={id} id={id}>
                <Bookmark type={viewType} className={activeId === id ? 'opacity-0' : ''} />
              </SortableItem>
            ))}
          </SortableContext>
          <DragOverlay>{activeId ? <Bookmark type={viewType} /> : null}</DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

Collection.defaultProps = {
  attributes: [],
  listeners: [],
  className: '',
};

export default Collection;

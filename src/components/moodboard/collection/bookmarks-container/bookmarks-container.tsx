import * as React from 'react';
import { closestCenter, DndContext, DragOverlay } from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { useRef, useState } from 'react';
import SortableItem from '../../../utility/dnd-kit/sortable-item';
import Bookmark from '../bookmark';
import EViewType from '../../../../utilities/enums/collection';
import './bookmarks-container.scss';

type BookmarksContainerProps = {
  hideBookmarks: boolean;
  viewType: EViewType;
};

const BookmarksContainer: React.FC<any> = ({
  hideBookmarks,
  viewType,
}: BookmarksContainerProps) => {
  const nodeRef = useRef(null);

  const [bookmarks, setBookmarks] = useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
  const [activeId, setActiveId] = useState('');

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
    <>
      {!hideBookmarks ? (
        <div ref={nodeRef} className="mt-16 flex flex-wrap gap-x-40 gap-y-24 transition-all">
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
      ) : null}
    </>
  );
};

export default BookmarksContainer;

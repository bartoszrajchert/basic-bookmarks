import * as React from 'react';
import { useDispatch } from 'react-redux';
import { closestCenter, DndContext, DragOverlay } from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { useRef, useState } from 'react';
import SortableItem from 'components/common/dnd-kit/sortable-item';
import { TBookmarks } from 'utilities/types/moodboard-types';
import Bookmark from 'components/moodboard-container/group-container/bookmarks-container/bookmark';
import EViewType from 'utilities/enums/collection';
import { dbUpdateBookmarksOrder } from 'api/firebase';
import { changeBookmarksOrder } from 'store/actions/groups/groups-actions';

type BookmarksContainerProps = {
  showBookmarks: boolean;
  viewType: EViewType;
  bookmarks: TBookmarks;
  groupId: string;
};

const BookmarksContainer = ({
  showBookmarks,
  viewType,
  bookmarks,
  groupId,
}: BookmarksContainerProps) => {
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  const [activeId, setActiveId] = useState('');

  const handleDragStart = (event: { active: any; over: any }) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;

    setActiveId('');

    if (active.id !== over.id) {
      const oldIndex = bookmarks.order.findIndex((bookmarkId) => bookmarkId === active.id);
      const newIndex = bookmarks.order.findIndex((bookmarkId) => bookmarkId === over.id);
      const newOrder = arrayMove([...bookmarks.order], oldIndex, newIndex);

      dispatch(changeBookmarksOrder(groupId, newOrder));
      dbUpdateBookmarksOrder(groupId, newOrder).then();
    }
  };

  const activeBookmark = bookmarks.data[activeId];

  return (
    <>
      {showBookmarks ? (
        <div ref={nodeRef} className="mt-16 flex flex-wrap gap-x-40 gap-y-24 transition-all">
          <DndContext
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={bookmarks.order} strategy={rectSortingStrategy}>
              {bookmarks.order.map((id) => (
                <SortableItem key={id} id={id}>
                  <Bookmark
                    type={viewType}
                    data={bookmarks.data[id]}
                    className={activeId === id ? 'opacity-0' : ''}
                  />
                </SortableItem>
              ))}
            </SortableContext>
            <DragOverlay>
              {activeId ? <Bookmark type={viewType} data={activeBookmark} /> : null}
            </DragOverlay>
          </DndContext>
        </div>
      ) : null}
    </>
  );
};

export default BookmarksContainer;

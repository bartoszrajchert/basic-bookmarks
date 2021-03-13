import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from './header';
import EViewType from '../../../utilities/enums/collection';
import {
  changeGroupViewTypeAction,
  changeGroupVisibility,
} from '../../../store/actions/groups-actions';
import {
  dbUpdateBookmarksVisibility,
  dbUpdateGroupView,
} from '../../../utilities/helpers/firebase';
import { TGroupFirebase } from '../../../utilities/types/moodboard-types';
import BookmarksContainer from './bookmarks-container';

type CollectionProps = {
  data: TGroupFirebase;
  attributes?: any;
  listeners?: any;
  className?: string;
};

const Collection = ({ data, attributes, listeners, className }: CollectionProps) => {
  const [viewType, setViewType] = useState(data.view);
  const [hideBookmarksState, setHideBookmarksState] = useState(!data.visible);
  const [name] = useState(data.name);
  const dispatch = useDispatch();

  // TODO: refactor this
  const changeViewType = async (newView: EViewType) => {
    dispatch(changeGroupViewTypeAction(data.id, newView));
    await dbUpdateGroupView(data.id, newView);
    setViewType(newView);
  };

  // TODO: refactor this
  const toggleBookmarks = async () => {
    dispatch(changeGroupVisibility(data.id, hideBookmarksState));
    await dbUpdateBookmarksVisibility(data.id, hideBookmarksState);
    setHideBookmarksState(!hideBookmarksState);
  };

  return (
    <div id={data.id} className={['mb-64', className].join(' ')}>
      <Header
        collectionViewType={viewType}
        onTypeChange={(type) => changeViewType(type)}
        toggleBookmarks={() => toggleBookmarks()}
        name={name}
        groupId={data.id}
        draggableAttributes={attributes}
        draggableListeners={listeners}
      />
      <BookmarksContainer
        hideBookmarks={hideBookmarksState}
        viewType={viewType}
        bookmarks={data.bookmarks}
        groupId={data.id}
      />
    </div>
  );
};

Collection.defaultProps = {
  attributes: [],
  listeners: [],
  className: '',
};

export default Collection;

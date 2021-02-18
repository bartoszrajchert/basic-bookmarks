import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from './header';
import EViewType from '../../../utilities/enums/collection';
import BookmarksContainer from './bookmarks-container';
import {
  changeGroupViewTypeAction,
  changeGroupVisibility,
} from '../../../store/actions/groups-actions';
import {
  dbUpdateBookmarksVisibility,
  dbUpdateGroupView,
} from '../../../utilities/helpers/firebase';
import { TGroupFirebaseData } from '../../../utilities/types/moodboard-types';

type CollectionProps = {
  data: TGroupFirebaseData;
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
    await dbUpdateGroupView(data.id, newView);
    dispatch(changeGroupViewTypeAction(data.id, newView));
    setViewType(newView);
  };

  // TODO: refactor this
  const toggleBookmarks = async () => {
    await dbUpdateBookmarksVisibility(data.id, hideBookmarksState);
    dispatch(changeGroupVisibility(data.id, hideBookmarksState));
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
      <BookmarksContainer hideBookmarks={hideBookmarksState} viewType={viewType} />
    </div>
  );
};

Collection.defaultProps = {
  attributes: [],
  listeners: [],
  className: '',
};

export default Collection;

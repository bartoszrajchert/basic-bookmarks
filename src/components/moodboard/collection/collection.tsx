import React, { useEffect, useState } from 'react';
import Header from './header';
import EViewType from '../../../utilities/enums/collection';
import { IBookmarksGroupsDoc } from '../../../utilities/types/moodboard-types';
import { dbUpdateGroupView } from '../../../utilities/helpers/firebase-helpers';
import BookmarksContainer from './bookmarks-container';

type CollectionProps = {
  data: IBookmarksGroupsDoc;
  hideBookmarks?: boolean;
  attributes?: any;
  listeners?: any;
  className?: string;
};

const Collection = ({ data, hideBookmarks, attributes, listeners, className }: CollectionProps) => {
  const [viewType, setViewType] = useState(data.view);
  const [hideBookmarksState, setHideBookmarksState] = useState(hideBookmarks);
  const [name] = useState(data.name);

  useEffect(() => {
    setHideBookmarksState(hideBookmarksState);
  }, [hideBookmarks, hideBookmarksState]);

  const changeViewType = async (newView: EViewType) => {
    await dbUpdateGroupView(data.id, newView);
    setViewType(newView);
  };

  const toggleBookmarks = () => {
    setHideBookmarksState(!hideBookmarksState);
  };

  return (
    <div className={['mb-64', className].join(' ')}>
      <Header
        collectionViewType={viewType}
        onTypeChange={(type) => changeViewType(type)}
        toggleBookmarks={() => toggleBookmarks()}
        name={name}
        groupId={data.id}
        draggableAttributes={attributes}
        draggableListeners={listeners}
      />
      <BookmarksContainer hideBookmarks={hideBookmarks || hideBookmarksState} viewType={viewType} />
    </div>
  );
};

Collection.defaultProps = {
  hideBookmarks: false,
  attributes: [],
  listeners: [],
  className: '',
};

export default Collection;

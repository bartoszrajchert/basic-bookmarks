import React, { useState } from 'react';
import Header from './header';
import Bookmark from './bookmark';
import EViewType from '../../../utilities/enums/collection';
import { IBookmarksGroupsDoc } from '../../../utilities/types/moodboard-types';
import { dbUpdateGroupView } from '../../../utilities/helpers/firebase-helpers';

type CollectionProps = {
  data: IBookmarksGroupsDoc;
};

const Collection = ({ data }: CollectionProps) => {
  const [viewType, setViewType] = useState(data.view);
  const [name] = useState(data.name);

  const changeViewType = async (newView: EViewType) => {
    await dbUpdateGroupView(data.id, newView);

    setViewType(newView);
  };

  return (
    <div className="mb-64">
      <Header
        collectionViewType={viewType}
        onTypeChange={(type) => changeViewType(type)}
        name={name}
        groupId={data.id}
      />
      <div className="mt-16 flex flex-wrap gap-x-40 gap-y-24">
        <Bookmark type={viewType} />
        <Bookmark type={viewType} />
        <Bookmark type={viewType} />
        <Bookmark type={viewType} />
        <Bookmark type={viewType} />
        <Bookmark type={viewType} />
        <Bookmark type={viewType} />
        <Bookmark type={viewType} />
        <Bookmark type={viewType} />
        <Bookmark type={viewType} />
        <Bookmark type={viewType} />
      </div>
    </div>
  );
};

export default Collection;

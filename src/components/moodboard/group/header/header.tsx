import React from 'react';
import { IconEye, IconLayoutGrid, IconLayoutList, IconMenu2, IconTrash } from '@tabler/icons';
import EViewType from 'utilities/enums/collection';

type HeaderProps = {
  collectionViewType: EViewType;
  onTypeChange: (type: EViewType) => void;
  deleteGroup: () => void;
  toggleBookmarks: () => void;
  groupTitleComponent: JSX.Element;
  draggableAttributes?: any;
  draggableListeners?: any;
};

const Header = ({
  collectionViewType,
  onTypeChange,
  deleteGroup,
  toggleBookmarks,
  groupTitleComponent,
  draggableAttributes,
  draggableListeners,
}: HeaderProps) => {
  const nextType: EViewType =
    collectionViewType === EViewType.small ? EViewType.large : EViewType.small;

  return (
    <>
      <div className="mb-16 flex justify-between">
        <div className="flex w-full">
          <div className="flex items-center">
            <IconMenu2 size={16} {...draggableAttributes} {...draggableListeners} />
            <span className="ml-4 p-4 rounded-5xl bg-black-600" role="img" aria-label="Sparkling">
              ✨
            </span>
          </div>
          <div className="ml-12">{groupTitleComponent}</div>
        </div>
        <button
          type="button"
          className="ml-12 flex items-center opacity-20 hover:opacity-100 transition-opacity"
          onClick={() => toggleBookmarks()}
        >
          <IconEye size={24} />
        </button>
        <button
          type="button"
          className="ml-12 flex items-center opacity-20 hover:opacity-100 transition-opacity"
          onClick={() => deleteGroup()}
        >
          <IconTrash size={24} />
        </button>
        <button
          type="button"
          className="ml-12 flex items-center opacity-20 hover:opacity-100 transition-opacity"
          onClick={() => onTypeChange(nextType)}
        >
          {collectionViewType === EViewType.small ? (
            <IconLayoutGrid size={24} />
          ) : (
            <IconLayoutList size={24} />
          )}
        </button>
      </div>
      <hr className="bg-white opacity-10" />
    </>
  );
};

Header.defaultProps = {
  draggableAttributes: [],
  draggableListeners: [],
};

export default Header;

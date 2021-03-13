import React from 'react';
import { IconEye, IconLayoutGrid, IconLayoutList, IconMenu2, IconTrash } from '@tabler/icons';
import { useDispatch } from 'react-redux';
import HeaderTitle from './header-title';
import EViewType from '../../../../utilities/enums/collection';
import { thunkDeleteGroup } from '../../../../store/actions/groups/groups-thunk-actions';

type HeaderProps = {
  collectionViewType: EViewType;
  onTypeChange: (type: EViewType) => void;
  toggleBookmarks: () => void;
  name: string;
  groupId: string;
  draggableAttributes?: any;
  draggableListeners?: any;
};

const Header = ({
  collectionViewType,
  onTypeChange,
  toggleBookmarks,
  name,
  groupId,
  draggableAttributes,
  draggableListeners,
}: HeaderProps) => {
  const dispatch = useDispatch();

  const nextType: EViewType =
    collectionViewType === EViewType.small ? EViewType.large : EViewType.small;

  const deleteGroup = async () => {
    dispatch(thunkDeleteGroup(groupId));
  };

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
          <div className="ml-12">
            <HeaderTitle groupId={groupId} name={name} />
          </div>
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

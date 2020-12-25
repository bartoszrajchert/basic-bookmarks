import React from 'react';
import { IconLayoutGrid, IconLayoutList, IconMenu2 } from '@tabler/icons';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import HeaderTitle from './header-title';
import EViewType from '../../../../utilities/enums/collection';

type HeaderProps = {
  collectionViewType: EViewType;
  onTypeChange: (type: EViewType) => void;
  dragHandleProps: DraggableProvidedDragHandleProps | undefined;
};

const Header = ({ collectionViewType, onTypeChange, dragHandleProps }: HeaderProps) => {
  const nextType: EViewType =
    collectionViewType === EViewType.small ? EViewType.large : EViewType.small;

  return (
    <>
      <div className="mb-16 flex justify-between">
        <div className="flex w-full">
          <div className="flex items-center">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <div {...dragHandleProps}>
              <IconMenu2 size={16} />
            </div>
            <span className="ml-4 p-4 rounded-5xl bg-black-600" role="img" aria-label="Sparkling">
              ✨
            </span>
          </div>
          <div className="ml-12">
            <HeaderTitle />
          </div>
        </div>
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

export default Header;

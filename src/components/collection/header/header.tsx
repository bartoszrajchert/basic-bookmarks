import React from 'react';
import { IconLayoutGrid, IconLayoutList, IconMenu2 } from '@tabler/icons';
import HeaderTitle from './header-title';
import EViewType from '../../../utilities/enums/collection';

type HeaderProps = {
  collectionViewType: EViewType;
  onTypeChange: (type: EViewType) => void;
};

const Header = ({ collectionViewType, onTypeChange }: HeaderProps) => {
  const nextType: EViewType =
    collectionViewType === EViewType.small ? EViewType.large : EViewType.small;

  return (
    <>
      <div className="mb-16 flex justify-between">
        <div className="flex w-full">
          <div className="flex items-center">
            <IconMenu2 size={16} />
            <span className="ml-4 p-4 rounded-5xl bg-black-600" role="img" aria-label="Sparkling">
              ✨
            </span>
          </div>
          <div className="ml-12 w-full">
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

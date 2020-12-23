import React from 'react';
import { IconLayoutGrid, IconMenu2 } from '@tabler/icons';
import HeaderTitle from './header-title';

// type HeaderProps = {
//   //
// };

const Header = () => (
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
      <div className="ml-12 flex items-center">
        <IconLayoutGrid size={24} opacity={0.2} />
      </div>
    </div>
    <hr className="bg-white opacity-10" />
  </>
);

export default Header;

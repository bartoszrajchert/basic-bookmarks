import React from 'react';
import { IconLayoutGrid, IconMenu2 } from '@tabler/icons';

// type HeaderProps = {
//   //
// };

const Header = () => (
  <div>
    <div className="mb-16 flex justify-between">
      <div className="flex">
        <div className="flex items-center">
          <IconMenu2 size={16} />
          <span className="ml-4 p-4 rounded-5xl bg-black-600" role="img" aria-label="Sparkling">
            ✨
          </span>
        </div>
        <div className="ml-12">
          <h2>Read everyday</h2>
        </div>
      </div>
      <div className="flex items-center">
        <IconLayoutGrid size={24} opacity={0.2} />
      </div>
    </div>
    <hr className="bg-white opacity-10" />
  </div>
);

export default Header;

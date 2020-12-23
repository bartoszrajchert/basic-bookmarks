import React from 'react';
import { IconLink, IconMenu, IconSettings, IconUser } from '@tabler/icons';
import IconButton from '../utility/icon-button';
import SearchBar from '../utility/search-bar';

function showAlert(): void {
  alert('Alert');
}

const Navbar = () => (
  <nav className="mb-40 grid grid-flow-col auto-cols-auto">
    <div className="">
      <IconButton text="Register or Login" icon={<IconUser />} onClick={() => showAlert()} />
    </div>
    <div className="justify-self-center">
      <SearchBar />
    </div>
    <div className="flex flex-row justify-self-end">
      <IconButton text="Get link" icon={<IconLink />} onClick={() => showAlert()} />
      <IconButton text="Settings" icon={<IconSettings />} onClick={() => showAlert()} />
      <IconButton text="Open tabs" icon={<IconMenu />} onClick={() => showAlert()} />
    </div>
  </nav>
);

export default Navbar;

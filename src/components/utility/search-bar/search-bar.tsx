import React from 'react';
import { IconSearch } from '@tabler/icons';
import './search-bar.scss';

const SearchBar = () => (
  <div className="search-bar py-12 px-16 bg-black-900 flex flex-row rounded-2xl">
    <IconSearch size="24" />
    <p className="opacity-40 pl-8">Search your bookmarks...</p>
  </div>
);

export default SearchBar;

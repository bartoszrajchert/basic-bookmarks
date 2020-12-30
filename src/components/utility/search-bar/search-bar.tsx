import React from 'react';
import { IconSearch } from '@tabler/icons';
import './search-bar.scss';

const SearchBar = () => {
  const [inputText, setInputText] = React.useState('Search your bookmarks...');

  return (
    <div className="search-bar py-12 px-16 bg-black-900 flex flex-row rounded-2xl">
      <IconSearch size="24" />
      <input
        className="opacity-40 pl-8 bg-transparent"
        value={inputText}
        onChange={(e) => setInputText(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBar;

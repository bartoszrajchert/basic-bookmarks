import React from 'react';
import { IconSearch } from '@tabler/icons';
import './search-bar.scss';

const SearchBar = () => {
  const placeholderText = 'Search your bookmarks...';
  const [inputText, setInputText] = React.useState(placeholderText);
  const [isPlaceholder, setIsPlaceholder] = React.useState(true);

  const changeText = (newText: string, placeholder: boolean) => {
    setInputText(newText);
    setIsPlaceholder(placeholder);
  };

  return (
    <div className="search-bar py-12 px-16 bg-black-900 flex flex-row rounded-2xl">
      <IconSearch size="24" />
      <input
        className={[isPlaceholder ? 'opacity-40' : '', 'pl-8 bg-transparent'].join(' ')}
        value={inputText}
        onChange={(e) => changeText(e.currentTarget.value, false)}
        onClick={() => (isPlaceholder ? changeText('', false) : null)}
        onBlur={() => changeText(placeholderText, true)}
      />
    </div>
  );
};

export default SearchBar;

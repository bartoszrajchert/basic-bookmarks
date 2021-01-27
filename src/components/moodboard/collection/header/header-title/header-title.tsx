import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';

type HeaderTitleProps = {
  name: string;
};

const placeholderText = 'Enter component name';

const HeaderTitle = ({ name }: HeaderTitleProps) => {
  const [text, setText] = useState(name);
  const [placeholder, setPlaceholder] = useState(name === '');

  const changeTextToPlaceholder = (newText: String) => {
    if (newText !== '') return;

    setPlaceholder(true);
  };

  const changeText = (newText: string) => {
    setText(newText);
    setPlaceholder(false);
  };

  return (
    <ContentEditable
      className={placeholder ? 'opacity-30' : ''}
      html={!placeholder ? text : placeholderText}
      onChange={(event) => changeText(event.currentTarget.innerText)}
      onBlur={(event) => changeTextToPlaceholder(event.currentTarget.innerText)}
      onClick={() => (placeholder ? changeText('') : null)}
      tagName="h2"
    />
  );
};

export default HeaderTitle;

import React, { useCallback, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { dbUpdateGroupName } from '../../../../../utilities/helpers/firebase-helpers';
import debounce from '../../../../../utilities/helpers/debounce';

type HeaderTitleProps = {
  groupId: string;
  name: string;
};

const placeholderText = 'Enter component name';

const HeaderTitle = ({ groupId, name }: HeaderTitleProps) => {
  const [text, setText] = useState(name);
  const [placeholder, setPlaceholder] = useState(name === '');

  const changeTextToPlaceholder = (newText: String) => {
    if (newText !== '') return;

    setPlaceholder(true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callDbToUpdateTitle = useCallback(
    debounce((newText) => dbUpdateGroupName(groupId, newText), 1000),
    [],
  );

  const changeText = async (newText: string) => {
    setText(newText);
    setPlaceholder(false);

    callDbToUpdateTitle(newText);
  };

  const removePlaceholder = () => {
    if (!placeholder) return;

    setText('');
    setPlaceholder(false);
  };

  return (
    <ContentEditable
      className={placeholder ? 'opacity-30' : ''}
      html={!placeholder ? text : placeholderText}
      onChange={(event) => changeText(event.currentTarget.innerText)}
      onBlur={(event) => changeTextToPlaceholder(event.currentTarget.innerText)}
      onClick={() => removePlaceholder()}
      tagName="h2"
    />
  );
};

export default HeaderTitle;

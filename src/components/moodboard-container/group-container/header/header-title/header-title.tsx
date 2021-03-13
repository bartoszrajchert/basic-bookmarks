import React from 'react';
import ContentEditable from 'react-contenteditable';

type HeaderTitleProps = {
  title: string;
  showPlaceholder: boolean;
  changeText: (newText: string) => void;
  changeTextToPlaceholder: (newText: string) => void;
  removePlaceholder: () => void;
};

const PLACEHOLDER_TEXT = 'Enter component name';

const HeaderTitle = ({
  title,
  showPlaceholder,
  changeText,
  changeTextToPlaceholder,
  removePlaceholder,
}: HeaderTitleProps) => (
  <ContentEditable
    className={showPlaceholder ? 'opacity-30' : ''}
    html={!showPlaceholder ? title : PLACEHOLDER_TEXT}
    onChange={(event) => changeText(event.currentTarget.innerText)}
    onBlur={(event) => changeTextToPlaceholder(event.currentTarget.innerText)}
    onClick={() => removePlaceholder()}
    tagName="h2"
  />
);

export default HeaderTitle;

import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

type HeaderTitleProps = {
  //
};

class HeaderTitle extends Component<HeaderTitleProps, any> {
  placeholderText = 'Enter component name';

  constructor(props: HeaderTitleProps | Readonly<HeaderTitleProps>) {
    super(props);

    this.state = {
      text: this.placeholderText,
      placeholder: true,
    };
  }

  changeTextToPlaceholder = (newText: String) => {
    if (newText !== '') return;

    this.setState({
      text: this.placeholderText,
      placeholder: true,
    });
  };

  changeText = (newText: string) => {
    this.setState({
      text: newText,
      placeholder: false,
    });
  };

  public render() {
    const { text, placeholder } = this.state;

    return (
      <ContentEditable
        className={placeholder ? 'opacity-30' : ''}
        html={text}
        onChange={(event) => this.changeText(event.currentTarget.innerText)}
        onBlur={(event) => this.changeTextToPlaceholder(event.currentTarget.innerText)}
        onClick={() => (placeholder ? this.changeText('') : null)}
        tagName="h2"
      />
    );
  }
}

export default HeaderTitle;

import React, { Component } from 'react';

type HeaderTitleProps = {
  //
};

class HeaderTitle extends Component<HeaderTitleProps, any> {
  constructor(props: HeaderTitleProps | Readonly<HeaderTitleProps>) {
    super(props);

    this.state = {
      text: 'Read everyday',
    };
  }

  changeText = (newText: string) => {
    this.setState({
      text: newText,
    });
  };

  public render() {
    const { text } = this.state;

    return (
      <input
        className="bg-black text-xl text-white font-bold w-full"
        value={text}
        onChange={(event) => this.changeText(event.currentTarget.value)}
      />
    );
  }
}

export default HeaderTitle;

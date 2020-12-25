import React, { Component } from 'react';
import Collection from './collection';
import AddButton from './add-button';

type MoodboardProps = {
  //
};

class Moodboard extends Component<MoodboardProps, any> {
  constructor(props: MoodboardProps | Readonly<MoodboardProps>) {
    super(props);

    this.state = {
      collectionLength: 2,
    };
  }

  addCollection = () => {
    const { collectionLength } = this.state;

    this.setState({
      collectionLength: collectionLength + 1,
    });
  };

  public render() {
    const { collectionLength } = this.state;
    const collections = [];

    for (let i = 0; i < collectionLength; i++) collections.push(<Collection />);

    return (
      <div>
        {collections}
        <AddButton onClick={() => this.addCollection()} />
      </div>
    );
  }
}

export default Moodboard;

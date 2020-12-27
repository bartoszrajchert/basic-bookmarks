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
      collections: [
        {
          id: 0,
        },
        {
          id: 1,
        },
      ],
    };
  }

  addCollection = () => {
    const { collections } = this.state;

    collections.push({ id: collections[collections.length - 1].id + 1 });

    this.setState({
      collections,
    });
  };

  public render() {
    const { collections } = this.state;

    return (
      <div>
        {collections.map((collection: { id: number }) => (
          <Collection key={collection.id} />
        ))}
        <AddButton onClick={() => this.addCollection()} />
      </div>
    );
  }
}

export default Moodboard;

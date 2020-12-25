import { DragDropContext, Droppable } from 'react-beautiful-dnd';
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
        {
          id: 2,
        },
      ],
    };
  }

  addCollection = () => {
    const { collections } = this.state;

    collections.push({
      id: collections[collections.length - 1].id + 1,
    });

    this.setState({
      collections,
    });
  };

  updateCollection = (newCollection: any) => {
    this.setState({
      collections: newCollection,
    });
  };

  handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const { collections } = this.state;

    const items = Array.from(collections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    this.updateCollection(items);
  };

  public render() {
    const { collections } = this.state;

    return (
      <div>
        <DragDropContext onDragEnd={(result) => this.handleOnDragEnd(result)}>
          <Droppable droppableId="moodboard">
            {(provided) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {collections.map((collection: { id: any }, index: number) => (
                  <Collection key={collection.id} id={collection.id} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <AddButton onClick={() => this.addCollection()} />
      </div>
    );
  }
}

export default Moodboard;

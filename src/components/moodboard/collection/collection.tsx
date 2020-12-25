import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Header from './header';
import Bookmark from './bookmark';
import EViewType from '../../../utilities/enums/collection';

type CollectionProps = {
  index: number;
  id: number;
};

class Collection extends Component<CollectionProps, any> {
  constructor(props: CollectionProps | Readonly<CollectionProps>) {
    super(props);
    this.state = {
      viewType: EViewType.small,
    };
  }

  changeViewType(type: EViewType) {
    this.setState({
      viewType: type,
    });
  }

  public render() {
    const { viewType } = this.state;
    const { id, index } = this.props;

    return (
      <Draggable key={id} draggableId={`${id}`} index={index}>
        {(provided) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <div className="mb-64" ref={provided.innerRef} {...provided.draggableProps}>
            <Header
              collectionViewType={viewType}
              onTypeChange={(type) => this.changeViewType(type)}
              dragHandleProps={provided.dragHandleProps}
            />
            <div className="mt-16 flex flex-wrap gap-x-40 gap-y-24">
              <Bookmark type={viewType} />
              <Bookmark type={viewType} />
              <Bookmark type={viewType} />
              <Bookmark type={viewType} />
              <Bookmark type={viewType} />
              <Bookmark type={viewType} />
              <Bookmark type={viewType} />
              <Bookmark type={viewType} />
              <Bookmark type={viewType} />
              <Bookmark type={viewType} />
              <Bookmark type={viewType} />
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Collection;

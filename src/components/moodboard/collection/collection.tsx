import React, { Component } from 'react';
import Header from './header';
import Bookmark from './bookmark';
import EViewType from '../../../utilities/enums/collection';
import { ICollectionDocument } from '../../../utilities/types/moodboard-types';

type CollectionProps = {
  data: ICollectionDocument;
};

class Collection extends Component<CollectionProps, any> {
  constructor(props: CollectionProps | Readonly<CollectionProps>) {
    super(props);
    const { data } = this.props;

    this.state = {
      viewType: data.view,
      name: data.name,
    };
  }

  changeViewType(type: EViewType) {
    this.setState({
      viewType: type,
    });
  }

  public render() {
    const { viewType, name } = this.state;

    return (
      <div className="mb-64">
        <Header
          collectionViewType={viewType}
          onTypeChange={(type) => this.changeViewType(type)}
          name={name}
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
    );
  }
}

export default Collection;

import React, { Component } from 'react';
import Header from './header';
import Bookmark from './bookmark';
import EViewType from '../../utilities/enums/collection';

type CollectionProps = {};

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

    return (
      <div className="mb-64">
        <Header />
        <div className="mt-16 flex">
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

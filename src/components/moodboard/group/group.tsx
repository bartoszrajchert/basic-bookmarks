import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  changeGroupName,
  changeGroupViewTypeAction,
  changeGroupVisibility,
} from 'store/actions/groups/groups-actions';
import { dbUpdateBookmarksVisibility, dbUpdateGroupName, dbUpdateGroupView } from 'api/firebase';
import { TGroup } from 'utilities/types/moodboard-types';
import Header from 'components/moodboard/group/header';
import BookmarksContainer from 'components/moodboard/group/bookmarks-container';
import EViewType from 'utilities/enums/collection';
import { thunkDeleteGroup } from 'store/actions/groups/groups-thunk-actions';
import debounce from 'utilities/helpers/debounce';
import HeaderTitle from 'components/moodboard/group/header/header-title';

type CollectionProps = {
  data: TGroup;
  attributes?: any;
  listeners?: any;
  className?: string;
};

const Group = ({ data, attributes, listeners, className }: CollectionProps) => {
  const dispatch = useDispatch();
  const [showPlaceholder, setShowPlaceholder] = useState(data.name === '');

  /**
   * TODO: refactor this
   *
   * U NEED TO PREVENT USER FROM CLOSING APP BEFORE
   * DATA WILL BE UPLOADED WITH NEW TITLE
   *
   * Method which delays uploading new text to database.
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callDbToUpdateTitle = useCallback(
    debounce(async (newText) => {
      await dbUpdateGroupName(data.id, newText);
    }, 1000),
    [],
  );

  /**
   * Change view type of the bookmarks in group.
   *
   * @param newView
   */
  const changeViewTypeOfTheBookmarks = async (newView: EViewType) => {
    dispatch(changeGroupViewTypeAction(data.id, newView));
    await dbUpdateGroupView(data.id, newView);
  };

  /**
   * Show or hide bookmarks in group.
   */
  const toggleBookmarks = async () => {
    const newVisible = !data.visible;

    dispatch(changeGroupVisibility(data.id, newVisible));
    await dbUpdateBookmarksVisibility(data.id, newVisible);
  };

  /**
   * Delete group.
   * This method is calling thunk.
   */
  const deleteGroup = async () => {
    dispatch(thunkDeleteGroup(data.id));
  };

  /**
   * Change group name to placeholder when it is necessary.
   *
   * @param newText
   */
  const changeGroupNameToPlaceholder = (newText: String) => {
    if (newText !== '') return;

    setShowPlaceholder(true);
  };

  /**
   * Change name of the group.
   *
   * @param newText
   */
  const changeName = async (newText: string) => {
    dispatch(changeGroupName(data.id, newText));
    setShowPlaceholder(false);

    callDbToUpdateTitle(newText);
  };

  /**
   * Remove placeholder in the name of the group.
   * The component is doing his job when
   * the placeholder is set.
   */
  const removePlaceholder = () => {
    if (!showPlaceholder) return;

    dispatch(changeGroupName(data.id, ''));
    setShowPlaceholder(false);
  };

  /**
   * Header title component to implementation.
   *
   * @see HeaderTitle
   */
  const groupTitleComponent = (
    <HeaderTitle
      changeText={changeName}
      changeTextToPlaceholder={changeGroupNameToPlaceholder}
      removePlaceholder={removePlaceholder}
      showPlaceholder={showPlaceholder}
      title={data.name}
    />
  );

  return (
    <div id={data.id} className={['mb-64', className].join(' ')}>
      <Header
        collectionViewType={data.view}
        onTypeChange={(type) => changeViewTypeOfTheBookmarks(type)}
        toggleBookmarks={toggleBookmarks}
        draggableAttributes={attributes}
        draggableListeners={listeners}
        deleteGroup={deleteGroup}
        groupTitleComponent={groupTitleComponent}
      />
      <BookmarksContainer
        showBookmarks={data.visible}
        viewType={data.view}
        bookmarks={data.bookmarks}
        groupId={data.id}
      />
    </div>
  );
};

Group.defaultProps = {
  attributes: [],
  listeners: [],
  className: '',
};

export default Group;

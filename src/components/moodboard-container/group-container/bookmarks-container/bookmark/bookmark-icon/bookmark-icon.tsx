import * as React from 'react';
import { TablerIcon } from '@tabler/icons';

type BookmarkIconProps = {
  iconElement: React.ReactElement<HTMLImageElement> | TablerIcon;
};

const BookmarkIcon = ({ iconElement }: BookmarkIconProps) => (
  <div className="p-16 rounded-base bg-black-900">{iconElement}</div>
);

export default BookmarkIcon;

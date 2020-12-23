import * as React from 'react';
import facebook from '../../../assets/facebook.png';
import EViewType from '../../../utilities/enums/collection';

type BookmarkProps = {
  type: EViewType;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Bookmark = ({ type }: BookmarkProps) => (
  <div className="flex flex-col items-center mr-40 last:mr-0 cursor-pointer">
    <div className="p-16 rounded-base bg-black-900">
      <img src={facebook} alt="facebook logo" height={40} width={40} />
    </div>
    <div className="mt-8">
      <p className="text-sm">Forbes</p>
    </div>
  </div>
);

export default Bookmark;

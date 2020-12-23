import * as React from 'react';

type BookmarkIconProps = {
  img: string;
  alt: string;
};

const BookmarkIcon = ({ img, alt }: BookmarkIconProps) => (
  <div className="p-16 rounded-base bg-black-900">
    <img src={img} alt={alt} height={40} width={40} />
  </div>
);

export default BookmarkIcon;

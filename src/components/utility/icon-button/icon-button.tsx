import React from 'react';
import './icon-button.scss';
import { TablerIconProps } from '@tabler/icons';

type IconButtonProps = {
  text: string;
  icon: TablerIconProps;
  onClick: () => void;
};

const IconButton = ({ text, icon, onClick }: IconButtonProps) => (
  <button
    className="icon-button p-12 mr-4 xl:mr-24 last:mr-0 flex flex-row rounded-xs transition-all duration-150 hover:bg-black-700"
    type="button"
    onClick={onClick}
  >
    {icon}
    <p className="ml-8 hidden xl:block">{text}</p>
    <div className="tooltip py-4 px-8 rounded-2xl xl:hidden bg-black-600 transition-all">
      <p>{text}</p>
    </div>
  </button>
);

export default IconButton;

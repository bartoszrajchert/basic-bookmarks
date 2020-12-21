import React from 'react';
import './icon-button.scss';
import { TablerIconProps } from '@tabler/icons';
import Tooltip from '../tooltip';

type IconButtonProps = {
  text: string;
  icon: TablerIconProps;
  onClick: () => void;
};

const IconButton = ({ text, icon, onClick }: IconButtonProps) => {
  const [isTooltipsHidden, setIsTooltipsHidden] = React.useState(true);

  return (
    <button className="icon-button" type="button" onClick={onClick}>
      <div
        className="p-12 mr-4 xl:mr-24 last:mr-0 flex flex-row rounded-xs transition-all duration-150 hover:bg-black-700"
        onMouseEnter={() => setIsTooltipsHidden(false)}
        onMouseLeave={() => setIsTooltipsHidden(true)}
      >
        {icon}
        <p className="ml-8 hidden xl:block">{text}</p>
      </div>
      <Tooltip text={text} hidden={isTooltipsHidden} />
    </button>
  );
};

export default IconButton;

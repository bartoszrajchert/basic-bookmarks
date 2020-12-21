import React from 'react';
import './icon-button.scss';
import { TablerIconProps } from '@tabler/icons';
import Tooltip from '../tooltip';
import breakpoints from '../../../utilities/breakpoints';

type IconButtonProps = {
  text: string;
  icon: TablerIconProps;
  onClick: () => void;
};

const IconButton = ({ text, icon, onClick }: IconButtonProps) => {
  const [isTooltipHidden, setIsTooltipHidden] = React.useState(true);

  return (
    <button className="icon-button xl:mr-24 last:mr-0" type="button" onClick={onClick}>
      <div
        className="p-12 mr-4 flex flex-row rounded-xs transition-all duration-150 hover:bg-black-700"
        onMouseEnter={() => setIsTooltipHidden(false)}
        onMouseLeave={() => setIsTooltipHidden(true)}
      >
        {icon}
        <p className="ml-8 hidden xl:block">{text}</p>
      </div>

      <Tooltip text={text} hidden={isTooltipHidden} breakpoint={breakpoints.xl} />
    </button>
  );
};

export default IconButton;

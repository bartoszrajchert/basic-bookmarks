import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './tooltip.scss';
import useWindowWidth from '../../../utilities/hooks/use-window-width';

type TooltipProps = {
  text: string;
  breakpoint?: number | null;
  hidden: boolean;
};

const Tooltip = ({ text, breakpoint = null, hidden }: TooltipProps) => {
  const nodeRef = useRef(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(
    breakpoint === null || window.innerWidth < breakpoint,
  );
  const windowWidth: number = useWindowWidth(300);

  useEffect(() => {
    setIsTooltipVisible(breakpoint === null || windowWidth < breakpoint);
  }, [breakpoint, windowWidth]);

  return (
    <>
      {isTooltipVisible ? (
        <CSSTransition
          nodeRef={nodeRef}
          in={!hidden}
          timeout={{ appear: 350, enter: 350, exit: 0 }}
          classNames="tooltip-transition"
        >
          <div
            ref={nodeRef}
            className="tooltip py-4 px-8 rounded-2xl bg-black-600 bg-opacity-80 transition-all"
          >
            <p>{text}</p>
          </div>
        </CSSTransition>
      ) : null}
    </>
  );
};

Tooltip.defaultProps = {
  breakpoint: null,
};

export default Tooltip;

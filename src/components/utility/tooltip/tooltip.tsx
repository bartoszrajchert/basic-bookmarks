import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './tooltip.scss';

type TooltipProps = {
  text: string;
  breakpoint?: number;
  hidden: boolean;
};

const Tooltip = ({ text, breakpoint = undefined, hidden }: TooltipProps) => {
  const nodeRef = React.useRef(null);

  const [isOverXLBreakpoint, setIsOverXLBreakpoint] = React.useState(true);
  React.useEffect(() => {
    if (typeof breakpoint !== 'undefined') {
      window.addEventListener('resize', () => {
        if (window.innerWidth > breakpoint) setIsOverXLBreakpoint(true);
        else setIsOverXLBreakpoint(false);
      });
    }
  });

  return (
    <>
      {typeof breakpoint !== 'undefined'
      && isOverXLBreakpoint
      && window.innerWidth > breakpoint ? null : (
        <CSSTransition
          nodeRef={nodeRef}
          in={!hidden}
          timeout={{ appear: 300, enter: 300, exit: 0 }}
          classNames="tooltip-transition"
        >
          <div ref={nodeRef} className="tooltip py-4 px-8 rounded-2xl bg-black-600 transition-all">
            <p>{text}</p>
          </div>
        </CSSTransition>
        )}
    </>
  );
};

Tooltip.defaultProps = {
  breakpoint: undefined,
};

// https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react

export default Tooltip;

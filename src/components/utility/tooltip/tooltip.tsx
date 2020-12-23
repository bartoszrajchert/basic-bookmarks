import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './tooltip.scss';

type TooltipProps = {
  text: string;
  breakpoint?: number | null;
  hidden: boolean;
};

const Tooltip = ({ text, breakpoint = null, hidden }: TooltipProps) => {
  const nodeRef = React.useRef(null);

  const [showTooltip, setShowTooltip] = React.useState(
    breakpoint === null || window.innerWidth < breakpoint,
  );

  React.useEffect(() => {
    if (breakpoint !== null) {
      window.addEventListener('resize', () => {
        setShowTooltip(window.innerWidth < breakpoint);
      });
    }
  });

  return (
    <>
      {showTooltip ? (
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

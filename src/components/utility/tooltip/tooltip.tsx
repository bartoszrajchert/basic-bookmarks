import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './tooltip.scss';

type TooltipProps = {
  text: string;
  hidden: boolean;
};

const Tooltip = ({ text, hidden }: TooltipProps) => {
  const nodeRef = React.useRef(null);

  return (
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
  );
};

// https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react

export default Tooltip;

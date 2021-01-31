import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type IconButtonProps = {
  id: string;
  children: React.ReactElement;
};

const SortableItem = ({ id, children }: IconButtonProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
    transition: {
      duration: 150, // milliseconds
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {React.cloneElement(children, { attributes, listeners })}
    </div>
  );
};

export default SortableItem;

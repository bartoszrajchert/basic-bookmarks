import * as React from 'react';
import { IconSquarePlus } from '@tabler/icons';
import './add-button.scss';

type AddButtonProps = {
  onClick: () => void;
};

const AddButton = ({ onClick }: AddButtonProps) => (
  <button
    type="button"
    className="add-button bg-black-900 rounded-2xl w-full py-12"
    onClick={onClick}
  >
    <div className="add-button__content flex justify-center items-center opacity-40 transition-opacity">
      <IconSquarePlus size={24} />
      <p className="ml-16">Add new collection...</p>
    </div>
  </button>
);

export default AddButton;

import React, { FC } from 'react';
import './MDCheckBox.css';

export interface MDCheckBoxProps {
  /**
   * Control checked state of the checkbox
   */
  isActive: boolean,
  onChange: (linkToProfile: boolean) => void
}
const MDCheckBox: FC<MDCheckBoxProps> = ({isActive, onChange}) => {

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="checkbox">
    <input type="checkbox" checked={isActive} onChange={handleOnChange} data-testid="link-to-profile-checkbox" />
    <span className="checkmark"></span>
  </label>
  );
}

export default MDCheckBox;

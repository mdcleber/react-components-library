import React, { FC } from 'react';

export interface MDHeaderProps {
  title: string;
}
const MDHeader: FC<MDHeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>Posted by John Doe</p>
      <p>Some additional information here</p>
    </header>
  );
};

export default MDHeader;

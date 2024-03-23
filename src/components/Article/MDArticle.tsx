import React, { FC, PropsWithChildren } from 'react';
import MDHeader from '../Header/MDHeader';

export interface MDArticleProps extends PropsWithChildren {
  title: string;
}
const MDArticle: FC<MDArticleProps> = ({ title, children }) => {
  return (
    <article>
      <MDHeader title={title} />
      {children}
    </article>
  );
};

export default MDArticle;

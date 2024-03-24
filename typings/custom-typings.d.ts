declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module 'rc-util*';

declare module 'jsonml.js/*';

declare module '*.json' {
  const value: any;
  export const version: string;
  export default value;
}

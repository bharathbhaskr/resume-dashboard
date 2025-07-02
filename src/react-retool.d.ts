// src/react-retool.d.ts
declare module 'react-retool' {
  import * as React from 'react';

  export interface RetoolProps {
    url: string;
    height?: string;
    width?: string;
    data?: Record<string, any>;
    organization?: string;
    headers?: Record<string, string>;
  }

  const Retool: React.FC<RetoolProps>;
  export default Retool;
}

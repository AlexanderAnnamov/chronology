declare module 'react-tagcloud' {
  import * as React from 'react';

  export interface Tag {
    value: string;
    count: number;
    [key: string]: any;
  }

  export interface TagCloudProps {
    minSize?: number;
    maxSize?: number;
    tags: Tag[];
    colorOptions?: {
      luminosity?: string;
      hue?: string;
    };
    shuffle?: boolean;
    renderer?: (
      tag: Tag,
      size: number,
      color: string
    ) => React.ReactNode;
    onClick?: (tag: Tag) => void;
    className?: string;
    style?: React.CSSProperties;
  }

  export class TagCloud extends React.Component<TagCloudProps> {}
}
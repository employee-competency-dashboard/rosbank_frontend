'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';

import { typeTagListProps } from './types';

export const TagList: React.FC<typeTagListProps> = props => {
  const { tags, className } = props;

  return (
    <ul className={cn(className, classes.tagsList)}>
      {tags &&
        tags.map((tag, index) => (
          <li className={cn(classes.listItem)} key={index}>
            {tag.title}
          </li>
        ))}
    </ul>
  );
};

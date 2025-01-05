import { LiHTMLAttributes, DetailedHTMLProps } from 'react';
import { headerMenuLinkWithChildren } from '../header-menu/types';

export interface headerMenuLinkProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLElement>, HTMLElement> {
  links: headerMenuLinkWithChildren;
}

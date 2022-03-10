import * as React from 'react';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { button } from './Button.css';

type IProps = RecipeVariants<typeof button>;

export function Button({ children, variant }: React.PropsWithChildren<IProps>) {
  return <button className={button({ variant })}>{children}</button>;
}

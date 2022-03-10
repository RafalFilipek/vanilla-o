import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '@opl/style';

export const button = recipe({
  base: {
    padding: '10px 20px',
    appearance: 'none',
    border: 'none',
  },

  variants: {
    variant: {
      primary: sprinkles({
        color: 'white',
        backgroundColor: 'orange_dark',
      }),
      secondary: sprinkles({
        color: 'black',
        backgroundColor: 'ash',
      }),
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

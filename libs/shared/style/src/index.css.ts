import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {},
});

const colors = {
  white: '#fff',
  black: '#000',
  orange_dark: '#f16e00',
  orange_light: '#ff7900',
  stardust: '#f5f5f5',
  pearl: '#eee',
  ash: '#ddd',
  chrome: '#ccc',
  dove: '#999',
  silver: '#666',
  steel: '#444',
  stone: '#333',
  raven: '#232323',
  positive: '#32c832',
  info: '#527edb',
  danger: '#cd3c14',
  warning: '#ffcc00',
  paradise_blue: '#4bb4e6',
  green_parrot: '#50be87',
  piggy_bank: '#ffb4e6',
  miami_sky: '#a885d8',
  summer_madness: '#ffd200',
};

const colorProperties = defineProperties({
  properties: {
    color: colors,
    background: colors,
    backgroundColor: colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];

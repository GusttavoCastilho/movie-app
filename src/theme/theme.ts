import { createTheme } from '@shopify/restyle';

const palette = {
  fieryRed: '#FF4B4B',
  midnightBlack: '#242A32',
  charcoalGrey: '#302E2D',
  stoneGrey: '#5C5C5C',
  pureWhite: '#FFFFFF',
  transparent: 'transparent',

  fbErrorBg: '#3A1B1B',
  fbErrorSurface: '#D32F2F',

  fbSuccessBg: '#1E3320',
  fbSuccessSurface: '#4CAF50',

  fbWarningBg: '#1A2B3A',
  fbWarningSurface: '#FFC107',

  fbInfoBg: '#332B1A',
  fbInfoSurface: '#42A5F5',
};
const theme = createTheme({
  colors: {
    background: palette.midnightBlack,
    primary: palette.fieryRed,
    text: palette.pureWhite,
    gray1: palette.charcoalGrey,
    gray2: palette.stoneGrey,
    ...palette,
  },
  spacing: {
    s2: 2,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
    padding: 16,
  },
  textVariants: {
    defaults: {
      color: 'text',
      fontFamily: 'PoppinsRegular',
      fontSize: 16,
      lineHeight: 18,
    },
    text18: {
      fontSize: 18,
      fontFamily: 'PoppinsSemiBold',
      lineHeight: 20,
    },
    text16SemiBold: {
      fontSize: 16,
      fontFamily: 'PoppinsSemiBold',
      lineHeight: 18,
    },
    text16: {
      fontSize: 16,
      fontFamily: 'PoppinsRegular',
      lineHeight: 18,
    },
    text14Medium: {
      fontSize: 14,
      fontFamily: 'PoppinsMedium',
      lineHeight: 16,
    },
    text14: {
      fontSize: 14,
      fontFamily: 'PoppinsRegular',
      lineHeight: 16,
    },
    text12Medium: {
      fontSize: 12,
      fontFamily: 'PoppinsMedium',
      lineHeight: 14,
    },
    text12: {
      fontSize: 12,
      fontFamily: 'PoppinsRegular',
      lineHeight: 14,
    },
  },
  borderRadii: {
    default: 16,
    rounded: 500,
  },
  boxShadows: {
    primary: '3px 3px 10px 3px rgba(255, 75, 75, 0.4)',
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
export default theme;

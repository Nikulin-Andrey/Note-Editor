const THEME_UNIT_SIZE = 8

const spacing = margins => THEME_UNIT_SIZE * margins

const config = {
  spacing,
  colors: {
    background: '#ffffff',
    font: '#333333',
    primary: '#6495ED',
    secondary: '#6B9903',
    tertiary: '#F28F7E',
  },
  fonts: {
    small: spacing(2),
    medium: spacing(3),
    big: spacing(4),
  },
  breakpoints: {
    desktop: {
      maxWidth: 1280,
    },
  },
}

export default config

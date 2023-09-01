const theme = {
  breakpoints: {
    xs: '425px',
    small: '768px',
    medium: '1024px',
    large: '1200px',
    xl: '1440px'
  },
  colors: {
    light: {
      primary: '#fff',
      secondary: '#777',
      accent: '#a9c42c',
      backgroundColor: '#5AB9EA',
      backgroundImage: 'linear-gradient(43deg, #5AB9EA 0%, #5680E9 46%, #8860D0 100%)'
    },
    dark: {
      primary: '#000',
      secondary: '#000',
      accent: '#000',
      background: '#000',
      componentBackground: 'rgba(255,255,255,.2)'
    }
  },
  zIndex: {
    background: 0,
    content: 1,
    header: 2,
    overlay: 3
  },
  boxShadow: {
    plain: '0 0 3px 2px rgba(0,0,0,.5)'
  },
  mode: 'light'
};
export default theme;
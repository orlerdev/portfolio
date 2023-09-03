const theme = {
  breakpoints: {
    xs: '425px',
    small: '768px',
    medium: '1024px',
    large: '1200px',
    xl: '1440px'
  },
  colors: {
    clr1: '#00c2ff',
    clr2: '#33ff8c',
    clr3: '#ffc640',
    clr4: '#e54cff',
    lightTheme: {
      primary: '#5E9596',
      secondary: '#AB6145',
      accent: '#D4916A',
      background: '#5E9596',
      backgroundImage: 'linear-gradient(to bottom right, #5E9596, #D4916A)',
      frosted: 'rgba(94,149,152,0.7)',
      text: '#2d5659',
      altText: '#fff',
      boxShadow: 'inset 1px 1.5px 2px #fff9, inset 1px -0.5px 2px #ffffff4d, 0 0.6021873017743928px 0.6021873017743928px -1.25px #0000002e, 0 2.288533303243457px 2.288533303243457px -2.5px #00000029, 0 10px 10px -3.75px #00000010'
    },
    darkTheme: {
      primary: '#5E9596',
      secondary: '#AB6145',
      accent: '#D4916A',
      background: '#1D3334',
      text: '#8FCBCA'
    }
  },
  effects: {
    blur: '1rem',
    fs: 'clamp(3rem, 8vw, 7rem',
    ls: 'clamp(-1.75px, -0.25vw, -3.5px'
  },
  fonts: {
    fontFamily: "'Victor Mono', monospace"
  }
};
export default theme;

// background: #5E9596;
// background: radial-gradient(at left top, #5E9596, #D4926A);
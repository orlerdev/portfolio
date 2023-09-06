const theme = {
  breakpoints: {
    xs: '475px',
    small: '800px',
    smedium: '900px',
    medium: '1024px',
    large: '1200px',
    xl: '1440px'
  },
  retinaQueries: {
    retina: '@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi)'
  },
  colors: {
    clr1: '#00c2ff',
    clr2: '#33ff8c',
    clr3: '#ffc640',
    clr4: '#e54cff',
    primary: '#807d7f',
    secondary: '#493c33',
    accent: '#D4916A',
    background: '#807d7f',
    backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,0,.1), #878681, rgba(0,0,0,.2))',
    frosted: 'rgba(79,166,201,0.7)',
    text: '#807d7f',
    altText: '#fff',
    boxShadow: 'inset 1px 1.5px 2px #fff9, inset 1px -0.5px 2px #ffffff4d, 0 0.6021873017743928px 0.6021873017743928px -1.25px #0000002e, 0 2.288533303243457px 2.288533303243457px -2.5px #00000029, 0 10px 10px -3.75px #00000010'
  },
  effects: {
    blur: '1rem',
    fs: 'clamp(3rem, 8vw, 7rem',
    ls: 'clamp(-1.75px, -0.25vw, -3.5px',
    boxShadow: '#493c33 inset 0 0 6px 3px'
  },
  fonts: {
    inter: '\'Inter\', sans-serif',
    victor: '\'Victor Mono\', monospace'
  }
};
export default theme;

// background: #5E9596;
// background: radial-gradient(at left top, #5E9596, #D4926A);
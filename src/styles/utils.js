import { css } from '@emotion/react';
import theme from './theme.js';

export const media = {
  xs: (styles) => css`
    @media (max-width: ${theme.breakpoints.xs}) {
      ${styles}
    }
  `,
  small: (styles) => css`
    @media (max-width: ${theme.breakpoints.small}) {
      ${styles}
    }
  `,
  smedium: (styles) => css`
    @media (max-width: ${theme.breakpoints.smedium}) {
      ${styles}
    }
  `,
  medium: (styles) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      ${styles}
    }
  `,
  large: (styles) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      ${styles}
    }
  `,
  xl: (styles) => css`
    @media (max-width: ${theme.breakpoints.xl}) {
      ${styles}
    }
  `
};


// export const getMenuItems = (location) => {
//   const isHomePage = location.pathname === '/';
//   const isAboutPage = location.pathname === '/about';
//   const isProjectsPage = location.pathname === '/projects';
//
//   if (isHomePage) {
//     return (
//       <>
//         <Item to="/about">About</Item>
//         <span>|</span>
//         <Item to="/projects">Projects</Item>
//       </>
//     );
//   }
//   if (isAboutPage) {
//     return (
//       <>
//         <Item to="/">Home</Item>
//         <span>|</span>
//         <Item to="/projects">Projects</Item>
//       </>
//     );
//   }
//   if (isProjectsPage) {
//     return (
//       <>
//         <Item to="/">Home</Item>
//         <span>|</span>
//         <Item to="/about">About</Item>
//       </>
//     );
//   }
// };

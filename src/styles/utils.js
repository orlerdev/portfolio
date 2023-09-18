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
import { style, globalStyle } from '@vanilla-extract/css';

export const header = style({
      color: '#fff',
      padding: '1rem',
      textAlign: 'center'
});

export const title = style({
  fontSize: '3rem',
  color: '#ddd'
});

export const subtitle = style({
  fontSize: '1.2rem',
  color: '#5d5d5d'
});

globalStyle('header', {
  padding: 50,
  fontFamily: 'Poppins, sans-serif',
  fontSize: 30,
  color: "#2d2d2d"
});
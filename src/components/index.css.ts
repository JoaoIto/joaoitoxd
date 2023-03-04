import { style, globalStyle } from '@vanilla-extract/css';

export const styles = {
  header: style({
    color: '#fff',
    padding: '1rem',
    textAlign: 'center'
  }),

  title: style({
    fontFamily: 'Inter',
    fontSize: '3rem',
    color: '#ddd'
  }),

  subtitle: style({
    fontSize: '1.2rem',
    color: '#5d5d5d'
  })
};
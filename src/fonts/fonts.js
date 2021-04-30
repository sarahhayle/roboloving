import { createGlobalStyle } from 'styled-components';
import Sega from './SEGA.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'SEGA LOGO FONT';
    font-style: normal;
    font-weight: normal;
    src: local('SEGA LOGO FONT'), url(${Sega}) format('woff');
  }
`

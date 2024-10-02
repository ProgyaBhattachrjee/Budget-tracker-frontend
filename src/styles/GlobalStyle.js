import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    list-style: none;
    color: black
}
:root {
  /* Elegant Color Scheme */
  --primary-color: #4e54c8;      /* A rich blue-purple */
  --secondary-color: #f67280;    /* A soft pinkish hue */
  --background-color: #f9f9f9;   /* Light, elegant background */
  --text-color: #2d2d2d;         /* Dark, sophisticated text color */
  --accent-color: #6c5ce7;       /* Accent for links and highlights */
  --error-color: #e74c3c;        /* Muted red for errors */
  
  /* Fonts */
  --font-family: 'Roboto', sans-serif;
  --font-heading: 'Merriweather', serif; /* Elegant serif font for headings */
  
  /* Font Sizes */
  --font-small: 14px;
  --font-medium: 18px;
  --font-large: 24px;
  --font-heading-size: 32px;

  /* Spacing */
  --spacing-small: 10px;
  --spacing-medium: 20px;
  --spacing-large: 30px;

  /* Border Radius */
  --border-radius: 8px;

  /* Box Shadow */
  --box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-duration: 0.3s;
}
`
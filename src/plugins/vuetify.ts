/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '../styles/main.scss'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VCard: {
      VBtn: { variant: 'outlined' },
    }
  },
  theme:{
    defaultTheme: 'dark',
    themes:{
      dark: {
        dark: true,
        colors: {
          primary: '#C4F47E',
          secondary: '#161618',
          tertiary: '#161618',
          background: '#F7F7F7',
          text: '#FFFFFF',
        },
        variables: {
          'theme-on-surface': '255,255,255',
        }
      }
    },
  },
})


/**
  --color-primary: 196,244,126;
  --color-secondary: 22,22,24;
  --color-tertiary: 22,22,24;
  --color-background: 247,247,247;
  --color-text: 255,255,255;
  --font-family-sans: "ESKlarheitKurrent",sans-serif;
  --font-family-headings: "ESKlarheitKurrent",sans-serif;
  --transition-duration: 0.25s;
  --transition-ease: ease-in-out;
  --font-weight-normal: 200;
  --font-weight-medium: 600;
  --font-weight-bold: 800;
  --radius: 8px;
  --borderline-opacity-50: 2px solid #ffffff33;
  --border-radius--25: 2.5rem;
  --border-radius--50: 5.5rem;
  --background-components: #1f2022;
 */

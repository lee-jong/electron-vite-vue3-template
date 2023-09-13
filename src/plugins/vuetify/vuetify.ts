import "vuetify/styles";
import "../../styles/_index.scss";
import { createVuetify } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

import { custom_icons } from "./icons";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          white: "#ffffff",
          black: "#000000",
          pruple: "#512DA8",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi,
      icons: custom_icons,
    },
  },
});

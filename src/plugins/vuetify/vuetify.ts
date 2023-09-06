import "vuetify/styles";
import { createVuetify } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

import { custom_icons } from "./icons";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi,
      icons: custom_icons,
    },
  },
});

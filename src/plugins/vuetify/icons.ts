import { h } from "vue";
import type { IconSet, IconProps } from "vuetify";
import logo from "../../components/commom/icons/Logo.vue";

const custom_icon_names: any = {
  logo,
};

const custom_icons: IconSet = {
  component: (props: IconProps) => h(custom_icon_names[props.icon as string]),
};

export { custom_icons };

/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, color } from "@storybook/addon-knobs/vue";

import MyButton from "./MyButton";
import Welcome from "./Welcome";

storiesOf("Welcome", module).add("to Storybook", () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo("Button") }
}));

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("with text", () => ({
    components: { MyButton },
    template: `<my-button @click="action" style="background-color: ${color(
      "Color",
      "#FFFFFF"
    )}">${text("label", "Hello Button")}!</my-button>`,
    methods: { action: action("clicked") }
  }))
  .add("with JSX", () => ({
    components: { MyButton },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo("clicked") }
  }))
  .add("with some emoji", () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action("clicked") }
  }));

/* eslint-enable react/react-in-jsx-scope */

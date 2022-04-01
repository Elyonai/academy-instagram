import React from "react";
import { Story, Meta } from "@storybook/react";
import CardInput, { InputProps } from "../Feed/Card/CardInput";

export default {
  title: "Feed/CardInput",
  component: CardInput,
} as Meta;

const Template: Story<InputProps> = (args) => <CardInput {...args} />;

export const InputItem = Template.bind({});
InputItem.args = {};

import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Button } from "@won-ui/core/src";

export default {
  title: "won-ui/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const BasicButton = () => <Button> asd</Button>;

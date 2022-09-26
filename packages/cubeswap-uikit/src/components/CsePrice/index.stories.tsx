import React from "react";
import { CsePrice, CsePriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/CsePrice",
  component: CsePrice,
};

const Template: React.FC<CsePriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <CsePrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  csePriceUsd: 20.0,
};

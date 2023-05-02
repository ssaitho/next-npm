import React from "react";
import type { NextPage } from "next";
import { Button, Range } from "@ssaitho/react_ts_storybook";
// import { Button } from "@openameba/spindle-ui";
import { PrimaryButton, StatusLabel } from "smarthr-ui";

const Home: NextPage = () => {
  return (
    <div>
      <p>home</p>
      <Button size="large">react_ts_storybook</Button>
      <br />
      <Range />
      <Range />
      <Range />
      {/* <Button size="large" variant="contained">
        Spindle
      </Button> */}
      <PrimaryButton>Hello World</PrimaryButton>
      <StatusLabel type="red">ラベル名</StatusLabel>
    </div>
  );
};

export default Home;

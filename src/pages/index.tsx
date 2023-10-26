import React from "react";
import type { NextPage } from "next";
import { Button } from "@ssaitho/react_ts_storybook";

const Home: NextPage = () => {
  return (
    <div>
      <p>home</p>
      <Button size="medium" variant="bg-blue-500">
        react_ts_storybook
      </Button>
    </div>
  );
};

export default Home;

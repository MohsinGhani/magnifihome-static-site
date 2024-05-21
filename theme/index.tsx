import React from "react";
import { App, ConfigProvider } from "antd";

const withTheme = (node: JSX.Element) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#0b3a6e",
          },
        }}
      >
        {node}
      </ConfigProvider>
    </>
  );
};

export default withTheme;

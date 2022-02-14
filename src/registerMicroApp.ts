import { registerMicroApps, start } from "qiankun";

export default () => {
  registerMicroApps([
    {
      name: "react app",
      entry: "//localhost:3001",
      container: "#sub-module",
      activeRule: "/subs/react-1",
    },
    {
      name: "react app 2",
      entry: "//localhost:3002",
      container: "#sub-module",
      activeRule: "/subs/react-2",
    },
  ]);
  start();
};

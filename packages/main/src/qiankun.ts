import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "React App One",
    entry: "//localhost:3001",
    container: "#container",
    activeRule: "/react-1",
  },
  {
    name: "React App Two",
    entry: "//localhost:3002",
    container: "#container",
    activeRule: "/react-2",
  },
]);

// start qiankun
start();

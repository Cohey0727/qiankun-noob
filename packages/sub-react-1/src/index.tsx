import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./public-path";
import App from "./App";

function render(props: any) {
  ReactDOM.render(<App />, document.querySelector("#sub-root"));
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

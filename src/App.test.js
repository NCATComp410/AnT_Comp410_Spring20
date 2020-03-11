import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
import SimpleFileUploader from "./components/FileUploader/FileUploader";

describe("Test `App` Component", () => {
  test("has class name `App`", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass("App");
  });

  test("renders Aggie Pride Text", () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent("Aggie Pride-Cyber Pirates");
  });

  test("renders `SimpleFileUploader", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SimpleFileUploader).exists()).toBeTruthy();
  });
});

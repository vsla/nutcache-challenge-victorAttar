import { render, screen } from "@testing-library/react";
import Paper from "./index";

describe("testing paper", () => {
  it("should render", () => {
    render(
      <Paper>
        <div>children</div>
      </Paper>
    );
    const paper = screen.queryByTestId("paper");
    expect(paper).toBeTruthy();
  });

  it("should render a title", () => {
    render(
      <Paper title="titulo">
        <div>children</div>
      </Paper>
    );
    const title = screen.queryByTestId("paper-title");
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent("titulo");
  });

  it("should render the children", () => {
    render(
      <Paper>
        <div data-testid="children">children</div>
      </Paper>
    );
    const children = screen.queryByTestId("children");
    expect(children).toBeTruthy();
    expect(children).toHaveTextContent("children");
  });
});

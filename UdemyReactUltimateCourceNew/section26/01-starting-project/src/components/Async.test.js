import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if fetrequest succeeds", async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => {
        return [{ id: "p1", title: "My first porst" }];
      },
    });
    render(<Async />);

    // Act

    // Assert
    const listItemsToRender = await screen.findAllByRole("listitem");
    expect(listItemsToRender).not.toHaveLength(0);
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders initial greeting 'It is good to see you!', before clicking button", () => {
    //Arrange
    render(<Greeting />);
    //Act

    //Assert
    const elemToTestFor = screen.getByText("It is good to see you!");
    expect(elemToTestFor).toBeInTheDocument();
  });

  test("renders greeting 'It is good to see you, and I hope you are doing well!', when button clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonToClick = screen.getByRole("button");
    userEvent.click(buttonToClick);

    //Assert
    const textToBeInDocument = screen.getByText(
      "It is good to see you, and I hope you are doing well!"
    );
    expect(textToBeInDocument).toBeInTheDocument();
  });

  test("does not render 'It is good to see you!' if button was clicked", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonToClick = screen.getByRole("button");
    userEvent.click(buttonToClick);

    // Assert
    const textToLookFor = screen.queryByText("It is good to see you!");
    expect(textToLookFor).toBeNull();
  });
});

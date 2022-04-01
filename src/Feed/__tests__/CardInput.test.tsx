import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CardInput from "../Card/CardInput";

describe("Input tests", () => {
  test("should be able to type into comment input", async () => {
    render(<CardInput />);

    const inputElement = screen.getByPlaceholderText(/Say something nice/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "Nice picture" },
    });
    expect(inputElement).toHaveValue("Nice picture");
  });
  test("should have empty input when Post button is clicked", async () => {
    render(<CardInput />);
    /*
        const inputElement = screen.getByRole("textbox", {
          name: "input-with-icon-textfield",
        });
  */
    const inputElement = screen.getByPlaceholderText(/Say something nice/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "Nice picture" },
    });
    const buttonElement = screen.getByRole("button", { name: /Post/i });
    fireEvent.click(buttonElement);
    expect(inputElement).toHaveValue("");
  });
});

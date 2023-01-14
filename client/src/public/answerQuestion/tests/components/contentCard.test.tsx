import ContentCard from "../../components/contentCard";
import { render, screen, fireEvent } from "@testing-library/react";

describe("contentCard", () => {
  const v = {
    id: 1,
    question: "You have lift",
  };
  const handleClick = vi.fn();

  beforeEach(() => {
    render(<ContentCard v={v} handleClick={handleClick} />);
  });

  test("should show the question", () => {
    /* expect("hi").toBe("hi"); */
    expect(screen.getByText("You have lift")).toBeDefined(); //toBeDefined is if exits
    expect(screen.getByDisplayValue)
  });

});

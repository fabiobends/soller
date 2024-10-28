import { render, screen, fireEvent } from "@testing-library/react";
import { CardItem } from "../card";
import { describe, it, expect } from "vitest";
import { Carrousel } from ".";

const mockItems: CardItem[] = [
  {
    id: "1",
    name: "Item 1",
    description: "Description for item 1",
    body: "Body of item 1",
    imageUrl: "/path/to/image1.jpg",
  },
  {
    id: "2",
    name: "Item 2",
    description: "Description for item 2",
    body: "Body of item 2",
    imageUrl: "/path/to/image2.jpg",
  },
  {
    id: "3",
    name: "Item 3",
    description: "Description for item 3",
    body: "Body of item 3",
    imageUrl: "/path/to/image3.jpg",
  },
];

describe("Carrousel Component", () => {
  it("renders the correct number of items", () => {
    render(<Carrousel items={mockItems} />);

    const cards = screen.getAllByText(/Item/);
    expect(cards).toHaveLength(mockItems.length);
  });

  it("shows the first item as expanded", () => {
    render(<Carrousel items={mockItems} />);

    const firstItem = screen.getAllByText("Body of item 1")[0];
    expect(firstItem).toBeInTheDocument();
    expect(firstItem.closest("div")).toHaveClass("h-[359px]");
  });

  it("navigates forward when the right button is clicked", () => {
    render(<Carrousel items={mockItems} />);

    const nextButton = screen.getAllByTestId("next");
    fireEvent.click(nextButton[0]);

    const secondItem = screen.getAllByText("Body of item 2")[0];
    expect(secondItem).toBeInTheDocument();
    expect(secondItem.closest("div")).toHaveClass("h-[359px]");
  });

  it("navigates backward when the left button is clicked", () => {
    render(<Carrousel items={mockItems} />);

    const nextButton = screen.getAllByTestId("next");
    fireEvent.click(nextButton[0]);

    const prevButton = screen.getAllByTestId("previous");
    fireEvent.click(prevButton[0]);

    const firstItem = screen.getAllByText("Body of item 1")[1];
    expect(firstItem).toBeInTheDocument();
    expect(firstItem.closest("div")).toHaveClass("h-[359px]");
  });
});

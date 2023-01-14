import { fireEvent, screen, render, waitFor } from "@testing-library/react";
import Products from "./Products";
import axiosMock from "axios";
import { act } from "@testing-library/react";
describe.only("Testing Products List.", () => {
  beforeEach(() => {
    console.log("Before Each TEST I run.");
    jest.clearAllMocks();
  });

  afterEach(() => {
    console.log("After Each TEST I run.");
  });

  it("should check list exists", () => {
    render(<Products />);
    const listElement = screen.getByTestId("list-products-id");
    expect(listElement).toBeInTheDocument();
  });

  it("should check pagination exists", () => {
    render(<Products />);
    const paginationElement = screen.getByTestId("pagination-id");
    expect(paginationElement).toBeInTheDocument();
  });

  it.only("should have list items", async () => {
    // axios
    const mockProducts = {
      status: 200,
      data: {
        products: [
          {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "...",
            images: ["...", "...", "..."],
          },
          {
            id: 2,
            title: "iPhone 10",
            description: "An apple mobile which is nothing like apple",
            price: 5429,
            discountPercentage: 12.906,
            rating: 4.629,
            stock: 90,
            brand: "Apple-2",
            category: "smartphones",
            thumbnail: "...",
            images: ["...", "...", "..."],
          },
        ],
        total: 2,
        skip: 0,
        limit: 1,
      },
    };

    axiosMock.get.mockResolvedValueOnce(mockProducts);

    act(() => {
      render(<Products />);
    });

    await waitFor(() => {
      const listItems = screen.getAllByTestId("list-items-id");
      expect(listItems.length).toBe(2);
    });
  });
});

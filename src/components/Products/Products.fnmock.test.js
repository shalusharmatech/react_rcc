import { fireEvent, screen, render, waitFor, act } from "@testing-library/react";
import Products from "./Products";
import * as productUtils from "./ProductUtils";


jest.mock("./ProductUtils", () => {
  return {
    getProductsData: jest.fn()
  }
});

describe("Testing Products List.", () => {
  // let renderMUI;
  const mockProducts = {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        brand: "Apple",
        thumbnail: "...",
      },
      {
        id: 2,
        title: "iPhone 10",
        description: "An apple mobile which is nothing like apple",
        brand: "Apple-2",
        thumbnail: "...",
      },
    ],
    totalPages: 1
  };

  beforeEach(() => {
    productUtils.getProductsData.mockImplementation(() => mockProducts);
    // renderMUI = createRender();
    console.log("Before Each TEST I run.");
  });

  afterEach(() => {
    console.log("After Each TEST I run.");
  });

  it("should check list exists", async () => {

    act(() => {
      render(<Products />);
    });

    await waitFor(() => {
      const listElement = screen.getByTestId("list-products-id");
      expect(listElement).toBeInTheDocument();
    });
  });

  it("should check pagination exists", async () => {

    act(() => {
      render(<Products />);
    });
    
    await waitFor(() => {
      const paginationElement = screen.getByTestId("pagination-id");
      expect(paginationElement).toBeInTheDocument();
      let pages = paginationElement.getElementsByTagName("li");

      // Note: +2 is for two arrows.
      // Total <li> elements = totalPages + left arrow (<) and right arrow (>).
      expect(pages.length).toBe(mockProducts.totalPages + 2);
    });

  });


  it("should have list items", async () => {

    act(() => {
      render(<Products />);
    });
    await waitFor(() => {
      const listItems = screen.getAllByTestId("list-items-id");
      expect(listItems.length).toBe(2);
    });

  });

});

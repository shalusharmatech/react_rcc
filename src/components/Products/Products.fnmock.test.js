import { fireEvent, screen, render, waitFor } from "@testing-library/react";
import Products from "./Products";
import axiosMock from "axios";
import { act } from "@testing-library/react";
import * as productUtils from "./ProductUtils";

jest.mock("./ProductUtils", () => {
  return {
    getProductsData: jest.fn()
  }
});

describe("Testing Products List.", () => {

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
    total: 2
  };

  beforeEach(() => {
    productUtils.getProductsData.mockImplementation(() => mockProducts);
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

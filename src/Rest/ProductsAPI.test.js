import axiosMock from "axios";
import ProductsAPI from "./ProductsAPI";

describe("Testing Products API", () => {
    beforeEach(() =>{
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should get response for products", async() => {
        const mockProducts = {
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
        };

        axiosMock.get.mockResolvedValueOnce(mockProducts);

        const productsAPI = new ProductsAPI();
        const result = await productsAPI.getProducts({
            limit: 1,
            skip: 2,
            select: "title,description,brand"
        });
        expect(result).toBe(mockProducts);
    });
});
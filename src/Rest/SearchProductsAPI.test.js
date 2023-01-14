import axiosMock from "axios";
import SearchProductsAPI from "./SearchProductsAPI";

describe.only('Testing Search Products API.', () => {

    beforeEach(() => {
        console.log("Before Each TEST I run.");
        jest.clearAllMocks();
    })

    afterEach(() => {
        console.log("After Each TEST I run.");
        jest.clearAllMocks();
    });

    /**
       @todo: Write test for Role.
    **/
    it('should search products and give response', async() => {
        const mockProducts = {
            products: [
                  {
                    "id": 1,
                    "title": "iPhone 9",
                    "description": "An apple mobile which is nothing like apple",
                    "price": 549,
                    "discountPercentage": 12.96,
                    "rating": 4.69,
                    "stock": 94,
                    "brand": "Apple",
                    "category": "smartphones",
                    "thumbnail": "...",
                    "images": ["...", "...", "..."]
                  },
                  {
                    "id": 1,
                    "title": "iPhone 9",
                    "description": "An apple mobile which is nothing like apple",
                    "price": 549,
                    "discountPercentage": 12.96,
                    "rating": 4.69,
                    "stock": 94,
                    "brand": "Apple",
                    "category": "smartphones",
                    "thumbnail": "...",
                    "images": ["...", "...", "..."]
                  },
                ],
                "total": 2,
                "skip": 0,
                "limit": 1
        };

        axiosMock.get.mockResolvedValueOnce(mockProducts);

        const searchProductsAPI = new SearchProductsAPI();
        const result = await searchProductsAPI.searchProducts({q:"phone"});

        expect(result).toBe(mockProducts);
    });
});
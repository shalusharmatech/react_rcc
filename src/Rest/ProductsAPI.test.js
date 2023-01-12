import ProductsAPI from './ProductsAPI';
import axiosMock from "axios";
describe.only('Testing AuthUtils Settings', () => {

    beforeEach(() => {
        console.log("Before Each TEST I run.");
    })

    afterEach(() => {
        console.log("After Each TEST I run.");
    });

    it('should set and get auth API Key.', async () => {

        const mockProducts = {
            "products": [
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
                    "id": 2,
                    "title": "iPhone 10",
                    "description": "An apple mobile which is nothing like apple",
                    "price": 5429,
                    "discountPercentage": 12.906,
                    "rating": 4.629,
                    "stock": 90,
                    "brand": "Apple-2",
                    "category": "smartphones",
                    "thumbnail": "...",
                    "images": ["...", "...", "..."]
                },
            ],
            "total": 2,
            "skip": 0,
            "limit": 1
        }

        axiosMock.get.mockResolvedValueOnce(mockProducts);
        const productsApi = new ProductsAPI({
            limit: 1,
            skip: 2,
            select: "title,description,brand"
        });
        const result = await productsApi.getProducts();
        expect(result).toBe(mockProducts);
    });
});
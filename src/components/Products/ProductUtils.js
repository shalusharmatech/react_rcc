import ProductsAPI from "./ProductsAPI";

export async function getProductsData(pagenumber, limit) {
    let products = [];
    let totalPages = 0;
    try {
        let skip = (pagenumber - 1) * limit;

        const prod = new ProductsAPI();

        const response = await prod.getProducts({
            limit: limit,
            skip: skip,
            select: "title,description,brand",
        });

        console.log(response);
        if (response.status === 200) {
            console.log(response.data);
            products = response.data.products;
            totalPages = Math.ceil(response.data.total / limit)
        }

    } catch (err) {
        console.log(err);
    }

    const result = {
        products: products,
        totalPages: totalPages
    }
    return result;
}
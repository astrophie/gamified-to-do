
const productsArr = [
    {
        id: "0",
        title: "white bread",
        price: 10
    },

    {
        id: "1",
        title: "whole wheat bread",
        price: 20
    },

    {
        id: "2",
        title: "rye bread",
        price: 40
    },

    {
        id: "3",
        title: "plain croissant",
        price: 80
    },
]

function getProductData(id) {
    let productData = productsArr.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product does not exist, id:" + id);
    }

    return productData;
}

export {productsArr, getProductData};
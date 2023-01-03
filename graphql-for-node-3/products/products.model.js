const products =[
    {
    id: 'redshoe' ,
    description: 'Red Shoe' ,
    price: 42.12,
    reviews:[]
    },
    {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 55.55,
    reviews:[]
    }]


    function getAllProducts(){
    return products
    }

    function getProductById(id){
    return products.find((product) =>{
        return (product.id===id)
    })
    }

    function getProductsByPrice(min,max){
   return products.filter((product) =>{
        return (product.price>= min && product.price<= max);
    })
    }


    function addNewProduct(id,description,price) {
        const newProdect ={
            id,
            description,
            price,
            reviews:[]
        };
        products.push(newProdect);
        return newProdect;
        
    }
    function addNewProductReview(id,rating,comment) {
       const product= getProductById(id)
       if(product){
        const newProductReview ={
            rating,
            comment,
        };
        product.reviews.push(newProductReview);
        return newProductReview;
       }

    }

    module.exports ={
        getAllProducts,
        getProductsByPrice,
        getProductById,
        addNewProduct,
        addNewProductReview,

    }
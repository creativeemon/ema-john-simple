import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
      const productsLoader = await fetch('products.json');
      const products = await productsLoader.json();
      const storedCart = getShoppingCart();
      const savedCart = [];
      // step-1
      for (const id in storedCart) {
          // console.log(id)
          const addedProduct = products.find(pd => pd.id === id);
          // step-2
          if (addedProduct) {
              //step-3 add quantity
              const quantity = storedCart[id]
              addedProduct.quantity = quantity;
              // step- 4
              savedCart.push(addedProduct)
          }
      }
      return savedCart;

}

export default cartProductsLoader;
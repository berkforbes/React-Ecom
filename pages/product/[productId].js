import { useRouter } from "next/router";
import { useEffect, useState } from "react"; // if product id isnt available as soon as page loads this will run through list once it it avail.
import { PRODUCTS } from "../../data/products";
import Image from "next/image";
import { Button } from "../../components/elements/Button";
import NumberCounter from "../../components/product/NumberCounter";

const imageLoader = ({ src }) => {
  return `/images/products/${src}`;
};

const productPage = () => {
  const router = useRouter(); //this is a hook
  const { productId } = router.query;
  const [product, setProduct] = useState({});
  const [notFound, SetNotFound] = useState(false); // user lands on page but product no longer exists
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (productId) {
      let index = PRODUCTS.findIndex((product) => product.id == productId); // look up the product if product id searched matches available product ids
      if (index > -1) {
        setProduct(PRODUCTS[index]); // if true then product found
      } else {
        SetNotFound(true);
      }
      setLoading(false);
    }
  }, [productId]);

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };

  if (notFound) {
    return <div>Product Not Found</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-lg mx-auto my-6">
      {product && (
        <>
          <div className="cols-span-2">
            <div className="border rounded border-slate-300 flex items-centered justify-center">
              <Image
                loader={imageLoader}
                src={product.imgUrl}
                alt="product image"
                width={150}
                height={300}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="cols-span-3 flex flex-col justify-between">
            <div className="product-info">
              <h1>{product.title}</h1>
              <p className="font-prozaMedium">{product.description}</p>
            </div>
            <div className="product-controls flex flex-row items-end justify-between">
              <NumberCounter
                quantity={quantity}
                updateQuantity={updateQuantity}
              />
              <Button variant="dark">Add to Cart</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );

  return <></>;
};

export default productPage;

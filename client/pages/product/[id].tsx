import React, { useState, createContext } from "react"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import { useProduct } from "../../hooks/useProduct"
import Layout from "../../components/layout"
import ImageWrapper from "../../components/imageWrapper"
import Quantity from "../../components/quantity"
import Button from "../../components/button"
import Specification from "../../components/specification"
import { Container } from "../../components/container"
import Loader from "../../components/loader"

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    Product(id: $id) {
      id
      name
      img_url
      quantity
      power
      price
      description
      brand
      weight
      height
      width
      length
      model_code
      colour
    }
  }
`;

export interface ProductData {
  Product: {
    id: string
    name: string
    description: string
    img_url: string
    quantity: number
    power: number
    price: number
    brand: string
    weight: number
    height: number
    width: number
    length: number
    model_code: string
    colour: string
  };
}

export const BasketContext = createContext({
  qtySelected: 0,
  itemsInBasket: 0,
  updateQtySelected: (value: number) => {},
})

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery<ProductData>(GET_PRODUCT, {
    variables: { id },
  })

  const [qtySelected, setQtySelected] = useState(0);
  const [basket, setBasket] = useState(0);

  const updateQtySelected = (value: number) => {
    setQtySelected(value);
  }

  useProduct(data);

  if (loading) return <Layout><Loader /></Layout>;
  if (error) return <Layout><Container><p className="pt-[150px]">Error with connection</p></Container></Layout>;

  if (!data) {
    return <Layout><Container><p className="pt-[150px]">{`No Product found with id:${id}`}</p></Container></Layout>;
  }

  const {
    id: productId,
    name,
    img_url,
    quantity,
    power,
    price,
    description,
    brand,
    weight,
    height,
    width,
    length,
    model_code,
    colour,
  } = data.Product;

  return (
    <BasketContext.Provider
      value={{ qtySelected, itemsInBasket: basket, updateQtySelected }}
    >
      <Layout>
        {data.Product && (
          <>
          <Container>
              <section className="px-5 pb-5 pt-[100px]" key={productId}>
                <ImageWrapper
                  objectFit="contain"
                  src={img_url}
                  altText={name}
                  hasRoundedCorners
                />
                <h1 className="text-6xl mt-2 leading-normal">{name}</h1>
                <Specification power={power} qty={quantity} />
                <div className="flex justify-between items-center mt-12">
                  <h2 className="text-4xl">£{(price / 100).toFixed(2)}</h2>
                  <Quantity updateQtySelected={updateQtySelected} />
                </div>
                <Button
                  onClick={() => setBasket(qtySelected)}
                  title="add to cart"
                >
                  Add to cart
                </Button>
              </section>
            </Container>
            <div className="bg-hemocyanin">
              <Container>
                <section className="p-5">
                  <h2 className="text-4xl mb-5">Description</h2>
                  {description}
                </section>
              </Container>
            </div>

            <Container>
            <section className="p-5">
              <h2  className="text-4xl mb-5">Specification</h2>
              <dl className="flex flex-wrap justify-between">
              <dt className="w-1/2 mb-2">Brand</dt><dd className="w-1/2 mb-2">{brand}</dd>
              <dt className="w-1/2 mb-2">Item weight (g)</dt><dd className="w-1/2 mb-2">{weight}</dd>
              <dt className="w-1/2 mb-2">Dimensions (cm)</dt><dd className="w-1/2 mb-2">{`${height} x ${width} x ${length}`}</dd>
              <dt className="w-1/2 mb-2">Item Model number</dt><dd className="w-1/2 mb-2">{model_code}</dd>
              <dt className="w-1/2 mb-2">Colour</dt><dd className="w-1/2 mb-2">{colour}</dd>
            </dl>
            </section>
            </Container>
          </>
        )}
      </Layout>
    </BasketContext.Provider>
  );
};

export default ProductDetail;

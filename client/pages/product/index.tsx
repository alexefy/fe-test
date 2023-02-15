import React from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { useProduct } from '../../hooks/useProduct'
import Layout from '../../components/layout'
import ImageWrapper from '../../components/imageWrapper'
import Container from '../../components/container'
import Loader from '../../components/loader'

export const GET_PRODUCTS = gql`
  query GetProducts {
    allProducts {
      id
      name
      img_url
    }
  }
`

export interface ProductsData {
  allProducts: Array<{
    id: string
    name: string
    img_url: string
  }>
}

const Product = () => {
  const { data, loading, error } = useQuery<ProductsData>(GET_PRODUCTS)
  useProduct(data)

  if (loading) return <Layout><Loader /></Layout>
  if (error) return <Layout><Container><p className="pt-[150px]">Error with connection</p></Container></Layout>

  if (!data) {
    return <Layout><Container><p className="pt-[150px]">{'No Products found'}</p></Container></Layout>
  }

  const { allProducts } = data

  return (
    <Layout>
      <Container>
        <div className="flex flex-wrap gap-5 pt-[100px] pb-10">
          {allProducts && allProducts.map((product) => (
            <section className="w-full p-5 sm:p-0 sm:w-[calc(50%_-_1.25rem)]" key={product.id}>
              <Link href={`/product/${product.id}`}>
                <a>
                  <ImageWrapper objectFit="contain" src={product.img_url} altText={product.name} hasRoundedCorners />
                </a>
              </Link>
              <h2 className="text-3xl mt-2 leading-normal"><Link href={`/product/${product.id}`}>{product.name}</Link></h2>
            </section>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default Product

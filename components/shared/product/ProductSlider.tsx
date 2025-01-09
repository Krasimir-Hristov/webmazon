'use client'
import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ProductCard from './productCard'
import { IProduct } from '@/lib/db/models/product.model'

const ProductSlider = ({
  titel,
  products,
  hideDetails,
}: {
  titel?: string
  products: IProduct[]
  hideDetails?: boolean
}) => {
  return (
    <div className='w-full bg-background'>
      <h2 className='h2-bold mb-5'>{titel}</h2>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full'
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.slug}
              className={
                hideDetails
                  ? 'md:basis-1/4 lg:basis-1/6'
                  : 'md:basis-1/3 lg:basis-1/5'
              }
            >
              <ProductCard
                hideDetails={hideDetails}
                hideAddToCart
                hideBorder
                product={product}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default ProductSlider

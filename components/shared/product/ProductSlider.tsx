'use client'
import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { IProduct } from '@/lib/db/models/product.model'
import ProductCard from './ProductCard'

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
    <div className='w-full bg-background relative'>
      <h2 className='h2-bold mb-5'>{titel}</h2>

      {/* Carousel */}
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

        {/* Navigation Buttons */}
        <CarouselPrevious className='absolute top-1/2 transform -translate-y-1/2 left-4 md:left-8 z-10' />
        <CarouselNext className='absolute top-1/2 transform -translate-y-1/2 right-4 md:right-8 z-10' />
      </Carousel>
    </div>
  )
}

export default ProductSlider

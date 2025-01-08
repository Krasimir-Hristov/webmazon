import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'
import data from '../data'
import { connectToDatabase } from '.'
import Product from './models/product.model'

loadEnvConfig(cwd())

const main = async () => {
  try {
    const { products } = data
    await connectToDatabase(process.env.MONGODB_URI)

    await Product.deleteMany()
    const createdProducts = await Product.insertMany(products)

    console.log({ createdProducts, message: 'Seed data successfully imported' })
  } catch (error) {
    console.error({ error, message: 'Failed to seed data' })
    throw new Error('Failde to seed data')
  }
}

main()

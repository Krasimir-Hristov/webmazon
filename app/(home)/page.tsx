import HomeCarousel from '@/components/shared/home/HomeCarousel'
import data from '@/lib/data'

const Page = async () => {
  return <HomeCarousel items={data.carousels} />
}

export default Page

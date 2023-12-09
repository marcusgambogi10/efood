import Header from '../../components/Header'
import CategoryList from '../../containers/CategoryList'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: foods } = useGetRestaurantsQuery()

  if (!foods) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <CategoryList categorys={foods} />
      <Footer />
    </>
  )
}

export default Home

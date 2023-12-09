import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Products from '../../components/Products'

import { useGetTypeQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Product = () => {
  const { id } = useParams()
  const { data: food } = useGetTypeQuery(id!)

  if (!food) {
    return <Loader />
  }

  return (
    <>
      <Header
        alternativeStyle={true}
        alternativeContent={true}
        alternativeSubtitle={true}
      />
      <Banner banner={food.capa} type={food.tipo} title={food.titulo} />
      <Products />
      <Footer />
    </>
  )
}
export default Product

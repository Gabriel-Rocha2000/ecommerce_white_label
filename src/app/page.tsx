import Banner from "@/components/banner/banner"
import Header from "@/components/header/header"
import Category from "@/components/category/category"
import Teatured from "@/components/teatured/teatured"
import Partners from "@/components/partners/partners"

export const Home = () => {
  return <div> 
    <Header></Header>
    <Banner></Banner>
    <Category></Category>
    <Teatured></Teatured>
    <Partners></Partners>
    </div>
}

export default Home
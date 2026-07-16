import { Routes, Route, Outlet, } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import About from '../pages/About'
import Menu from '../pages/Menu'
import OurChefs from '../pages/OurChefs'
import Reviews from '../pages/Reviews'
import Contact from '../pages/Contact'
import BookTable from '../components/bookTable/BookTable'
import LearnMoreAboutUs from '../components/learnMoreAboutUs/LearnMoreAboutUs'

const MainLayout = () => {
  return (
    <>
        <Header />
            <Outlet />
        <Footer />
    </>
  )

}

const AppRoutes = () => {
    return (
        <>
            <Routes>
                        <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='menu' element={<Menu />} />
                    <Route path='ourchefs' element={<OurChefs />} />
                    <Route path='review' element={<Reviews />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='book' element={<BookTable />} />
                    <Route path='learn' element={<LearnMoreAboutUs />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes;
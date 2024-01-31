import Navbar from "./components/Navbar"
import Category from "./components/Category"
import Images from "./components/Image"
import Recommended from "./components/Recommended"
import Topics from "./components/Topics"
import Popular from "./components/Popular"
import Footer from "./components/footer"


function App() {
    return (
        <>
            <Navbar></Navbar>
            <Category></Category>
            <Images></Images>
            <Recommended></Recommended>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </>
    )
}

export default App
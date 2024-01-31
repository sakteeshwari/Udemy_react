import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"

function Recommended()
{
    return(
        // recommended section
        <div className="recommended_sec">
        <h1>Recommended for you</h1>
        <p>Pick the best fit</p>
        <div className="product_container">
            <div className="product_card">
                <img src={c1} alt="product-one"></img>
                <h3>2023 Python Data Visualization Masterclass</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del>899</del></p>
            </div>
            <div className="product_card">
                <img src={c2} alt="product_two"></img>
                <h3>Web Development Bootcamp 2023 | Advance</h3>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>339 <del>799</del></p>
            </div>
            <div className="product_card">
                <img src={c3} alt="product-three"></img>
                <h3>Master UI/UX Designing</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>559 <del>959</del></p>
            </div>
            <div className="product_card">
                <img src={c4} alt="product_four"></img>
                <h3>Basic to Advance Java Course Training</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>599 <del>999</del></p>
            </div>
        </div>
    </div>
    )
}
export default Recommended
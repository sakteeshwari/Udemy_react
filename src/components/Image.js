import saleimage from "../assets/images/sale_image.jpg"

function Images()
{
    return(

        // images section
        <div className="img_sale">
        <img src={saleimage} alt="section_image"></img>
        <div className="imgsale_box">
            <h2>Udemy Flash Sale! 24 hours to save.</h2>
            <p>Get the courses for just 499. Just one day to save but lifetime to learn.</p>
        </div>
    </div>
    )
}
export default Images
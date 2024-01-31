
// navbar 1
function Navbar()
{
   return ( 
    <header  className="header_top">
        <div  className="navbar">
            <div  className="nav__s1">
                <h1>Udemy</h1>
            </div>
            <div  className="nav__s2">
                <i  className="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
                <input type="search" placeholder="Search for anything here.Tech,Business,Art....."></input>
            </div>
            <div  className="nav__s3">
                <p>Trending Courses</p>

               {/* list box popup menu   */}
                <div  className="mylearn_listbox">
                    <p>My Learning</p>
                    <div  className="mylearn_listbox_child">
                        <div  className="transition_box"></div>
                        <p>You didnot purchase anything yet...</p>
                    </div>
                </div>
                <i  className="fa-solid fa-cart-shopping" style={{color: "#000000;"}}></i>
                <i  className="fa-solid fa-bell" style={{color:" #000205"}}></i>
                <i  className="fa-solid fa-user" style={{color: "#000000"}}></i>
            </div>

            {/*mobile screen new section added */}
            <div  className="nav__s4">
                <i  className="fa-solid fa-bars"></i>
            </div>
        </div>


    </header>
   )
}

export default Navbar
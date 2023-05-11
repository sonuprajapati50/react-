import React from "react"
import ReactDOM from "react-dom/client"


const Title = () => (
    <a href="/">
        <img
            className="logo"
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTru1Oysn4AeqzE5TqhR-Htkg6ahpDjMFBA&usqp=CAU" />
    </a>
)


const Header = () => {
    return (
        <div className="header">
            <Title />

            <div className="nav-items">
                <ul>
                    <li>home </li>
                    <li>about us</li>
                    <li> contact us</li>
                    <li>cart</li>
                </ul>

            </div>
        </div>

    )
}

const Restaurnt= ()=>{
    return (
        <>
        <img   src="https://b.zmtcdn.com/data/dish_photos/467/5148215730bbb6fd434be4fbecf96467.png"/>
        <h4>biryani</h4>
        </>
    )
}



const Body = () => {
    return (
        <Restaurnt />
    )
}


const Footer = () => {
    return (
        <h1>Footer</h1>
    )

}


const Applayout = () => {
    return (
        <>
            < Header />
            < Body />
            < Footer />
        </>
    )
}







const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(< Applayout />)





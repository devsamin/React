import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'
import { AddtoLs, GetItem, removeformls } from "../../utilities/localStore";
import Cart from "../Cart/Cart";
const Bottles = () => {
    const [bottlee, setbottlee] = useState([])
    const [cart, setcart] = useState([])
    useEffect(()=>{
        fetch('bottle.json')
        .then(res=>res.json())
        .then(data=>setbottlee(data))
    },[])

    useEffect(()=>{
        console.log(bottlee.length)
        if(bottlee.length){
            const getStorecart = GetItem()
            console.log(getStorecart, bottlee)
            const Savedcart = []
            for(const id of getStorecart){
                const bottle = bottlee.find(bottle => bottle.id === id)
                Savedcart.push(bottle)
            }
            console.log(Savedcart)
            setcart(Savedcart)
        }
    },[bottlee])
    
    const handeladdtocart = (bottle)=>{
        // console.log(bottle)
        const newcart = [...cart, bottle]
        setcart(newcart)
        AddtoLs(bottle.id)
    }

    const handeltoremobeCart =(id)=>{
        const remaninigcart = cart.filter( bottlee => bottlee.id !== id)
        setcart(remaninigcart)
        removeformls(id)
    }
    return (
        <div>
            <h3>Here Is Bottles : {bottlee.length}</h3>
            <Cart cart={cart} handeltoremobeCart={handeltoremobeCart}></Cart>
            <div className="bottle-container">
            {
                bottlee.map(bottlee=><Bottle key={bottlee.id} handeladdtocart={handeladdtocart} bottlee={bottlee}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;
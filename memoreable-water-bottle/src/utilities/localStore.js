const GetItem = () =>{
    const getstoteitem = localStorage.getItem('cart')
    if(getstoteitem){
        return JSON.parse(getstoteitem)
    }
    return []
}


const SavetoLs = (cart)=>{
    const cartstringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartstringified)
}
const AddtoLs = (id) =>{
    // console.log(id)
    const cart = GetItem()
    cart.push(id)
    SavetoLs(cart)

}
const removeformls= (id)=>{
    const cart = GetItem()
    const remaningcart = cart.filter(idx => idx !== id)
    SavetoLs(remaningcart)
}

export {AddtoLs, GetItem, removeformls}
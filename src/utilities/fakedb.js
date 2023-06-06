

export const setLocal =(id,img,courseName,price) =>{
    // console.log(id)
    let cart =JSON.parse(localStorage.getItem('cart')) || [];
    const getCourseId = cart.findIndex(course=>course.id==id);
    if(getCourseId !== -1){
        cart[getCourseId].quantity += 1;
    }
    else{
        const newCart = {id:id,courseName:courseName,img:img,price:price,quantity:1}
        cart.push(newCart)
    }
    
    localStorage.setItem('cart',JSON.stringify(cart))
}
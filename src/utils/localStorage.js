export const saveCart = async (carts) => {
  try {
    await localStorage.setItem("@cart", JSON.stringify(carts));
    console.log("saveCartStorage: " + JSON.stringify(carts));
  } catch (error) {
    return [];
  }
};

export const getCart = async ()=>{
    try {
        const value = await localStorage.getItem('@cart');
        if(value !== null){
            return JSON.parse(value);
        }
        return [];
    } catch (error) {
        return [];
    }
}
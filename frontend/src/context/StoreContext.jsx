import { createContext, useEffect, useState } from "react";
import { hotel_list } from "../assets/assets";
import axios from "axios"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token,setToken] = useState("");
    const [food_list,setFoodList] = useState([])

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }


    const data = hotel_list

    const [filterData, setFilterData] = useState([]);
    const [wordEntered, setwordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setwordEntered(searchWord);

        const newFilter = data.filter((value) => {
            return value.hotel_name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilterData([]);
        }
        else {
            setFilterData(newFilter);
        }
    };

    const clearInput = () => {
        setFilterData([]);
        setwordEntered("");
        // window.location.reload();
        sethotel("Every")
    }

    const handleValue = (arg) => {
        // let restaurant = document.getElementById("rest");
        let ans = arg;
        console.log(ans+"\t");
        // console.log(arg);
        setwordEntered(ans);
        if (ans !== "") {
            setFilterData([]);
        }
    }



    const [hotel,sethotel] = useState("Every");

    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData)
    }

    useEffect(()=>{    
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    },[])

    const contextValue = {
        url,
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,

        handleFilter,
        clearInput,
        handleValue,
        filterData,
        setFilterData,
        wordEntered,
        setwordEntered,

        hotel,
        sethotel,

        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
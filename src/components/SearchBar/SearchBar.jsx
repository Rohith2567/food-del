import React, { useContext, useState } from 'react'
import './SearchBar.css'

import ScrollToTop from './ScrollToTop';

import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { StoreContext } from '../../context/StoreContext';


const SearchBar = ({ placeholder, data }) => {

    const { handleFilter,
        clearInput,
        handleValue,
        filterData,
        setFilterData,
        wordEntered,
        setwordEntered } = useContext(StoreContext)

    // const [filterData, setFilterData] = useState([]);
    // const [wordEntered, setwordEntered] = useState("");

    // const handleFilter = (event) => {
    //     const searchWord = event.target.value;
    //     setwordEntered(searchWord);

    //     const newFilter = data.filter((value) => {
    //         return value.hotel_name.toLowerCase().includes(searchWord.toLowerCase());
    //     });

    //     if (searchWord === "") {
    //         setFilterData([]);
    //     }
    //     else {
    //         setFilterData(newFilter);
    //     }
    // };

    // const clearInput = () => {
    //     setFilterData([]);
    //     setwordEntered("");
    // }

    // const handleValue = (arg) => {
    //     // let restaurant = document.getElementById("rest");
    //     let ans = arg;
    //     console.log(ans+"\t");
    //     // console.log(arg);
    //     setwordEntered(ans);
    //     if (ans !== "") {
    //         setFilterData([]);
    //     }
    // }

    const [srh, setSrh] = useState("")

    const handleSrh = () => {
        const newSrh = srh === "Y" ? "" : "Y";
        setSrh(newSrh);

        const s = document.getElementById("rest");
        const v = document.getElementsByClassName("search");

        if (newSrh === "Y") {
            s.classList.add("search-visible");
            // v.style.removeProperty("width");

            for (let i = 0; i < v.length; i++) {
                v[i].style.width = "300px";
            }
            // v.style.width = "210px";
        } else {
            s.classList.remove("search-visible");
            for (let i = 0; i < v.length; i++) {
                v[i].style.width = "50px";
            }
            // v.style.width = "40px";
        }
    };



    return (
        <div className='search'>
            
            <ScrollToTop />

            <div className="search-inputs">

                <div className="search-icon" onClick={handleSrh}>
                    {/* {(filterData.length === 0 && wordEntered === "") ? <CiSearch /> : <div></div>} */}
                    <CiSearch />
                </div>

                <input id='rest' className='' type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />

                <div className="search-icon">
                    {(filterData.length === 0 && wordEntered === "") ? <div></div> : <IoIosClose id='clearBtn' onClick={clearInput} />}
                </div>
            </div>
            {filterData.length != 0 && (
                <div className="data-result">
                    {filterData.slice(0, 8).map((value, key) => {
                        // console.log(value.hotel_id)
                        return (
                            <a href='#explore-menu' onClick={() => handleValue(value.hotel_name)} className='data-item' >
                                <p id={value.hotel_id}>{value.hotel_name}</p>
                            </a>
                        )
                    })}
                </div>
            )}
        </div>
    )
}


export default SearchBar

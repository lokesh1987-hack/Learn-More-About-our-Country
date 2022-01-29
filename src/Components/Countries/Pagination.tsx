import { useState } from "react"
import React from 'react'


interface propTypes {    
    paginate: Function,  
    totalCards: number,  
    perPageData: number,   
    currentPage: number
}  

function Pagination({ perPageData, totalCards, paginate ,currentPage }: propTypes) {

    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalCards / perPageData); i++) {
        pageNumber.push(i)
    }

    const style = {
        active :{
            backgroundColor:"blue",
            color:"white",
            PointerEvent:"auto"
        },
        inactive:{
            color:"blue",
            PointerEvent:"auto"
        }
    }



    return (
        <div className="m-5">
            <div className="container">
            <div className="d-flex justify-content-center">
                <ul className="pagination shadow" >
                    {pageNumber.map((number) => {
                        return (<li key={number} className="page-item page-link" style={(number===currentPage)?style.active:style.inactive} ><a onClick={() => paginate(number)}>{number}</a></li>)
                    })}
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Pagination

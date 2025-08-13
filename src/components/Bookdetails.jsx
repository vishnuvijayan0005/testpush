import { useEffect, useState } from "react"

let Bookdetails=()=>{
    const [books,setbooks] =useState([])
    const [refresh,setRefresh]= useState(0)
        useEffect(()=>{
        fetch('https://potterapi-fedeperin.vercel.app/en/books')
        .then((response) => response.json())
        .then((data) =>setbooks(data))
        console.log("refreshed");
        
    },[refresh])
    return(
        <div>
            <table border={1}>
                <tr><th>Number</th>
                <th>Title</th>
                <th>Original Title</th>
                <th>Released Date</th>
                <th>Decription</th>
                <th>Pages</th>
                <th>Cover</th></tr>
                {books.map((item)=>(
                   <tr key={item.number}>
                    <td>{item.number}</td>
                    <td>{item.title}</td>
                    <td>{item.originalTitle}</td>
                    <td>{item.releaseDate}</td>
                    <td>{item.description}</td>
                    <td>{item.pages}</td>
                    <td><img src={item.cover} alt="" /></td>
                   </tr>
                ))}
                
                </table> 
                <button onClick={()=>setRefresh(refresh+1)}></button>
        </div>
    )

}
export default Bookdetails
import {useState} from "react";
import BookSearch  from "./CustomHooks/Bookserach";
export default function PaginatinoSearch(){
    const [querty,setQuery] = useState('');
    const [pageno,setPageNo] = useState(0);
    BookSearch(querty,pageno);
    function handlechange(e){
        setQuery(e.target.value);
        console.log("The Entered value is "+ querty)
    }
    return(
        <>
          <input type="text" value={querty} onChange={handlechange} placeholder="Enter Something to search "></input>
        </>
    )
}
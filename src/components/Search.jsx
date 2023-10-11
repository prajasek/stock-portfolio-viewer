import { useState } from "react";
import "../App.css";


export default function Search() {

    const defaultValue= 'Search Symbol...';
    const [inputValue, setInputValue] = useState(defaultValue);

    return (
        <div className="searchContainer"> 
            <input type="text" 
            name="symbol" 
            value={inputValue} 
            onChange={e => setInputValue(e.target.value ? e.target.value : defaultValue)}
            onFocus={() => setInputValue('')} 
            /> 
        </div>
  )
}

import { useState } from "react";

function ItemList({items, onFilter}) {
    const [searchTerm, setSearchTerm] = useState('');

    const onChagneTerm = (e) => {
        setSearchTerm(e.target.value);
        onFilter(e.target.value);
    }

    const filterList = items.filter((e)=> e.name.includes( searchTerm))

    return <div>
        <input value={searchTerm} onChange={onChagneTerm} />
        
        <p>{filterList.map((item) => (
            <p>{item.name}</p>
        ))}</p>

    </div>
    

}

export default ItemList;
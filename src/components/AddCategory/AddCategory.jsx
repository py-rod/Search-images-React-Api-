import { useState, useRef } from "react"


export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState("")

    const refInputSearch = useRef()

    const obtainInput = (event) => {
        let category = event.target.value;
        setInputValue(category)
    }

    const addCategory = (event) => {
        event.preventDefault();
        if (inputValue != "" && inputValue.trim() <= 1 == false) {
            onAddCategory(inputValue)
            setInputValue("")
            refInputSearch.current.value = "";
        }
        else {
            console.log("La categoria existe o esta vacia")
            refInputSearch.current.value = "";
        }
    }

    return (
        <>
            <form onSubmit={addCategory}>
                <input type="text" placeholder='Buscar Grif' onChange={obtainInput} ref={refInputSearch} />
                <button onClick={addCategory}>Buscar</button>
            </form>
        </>
    )
}
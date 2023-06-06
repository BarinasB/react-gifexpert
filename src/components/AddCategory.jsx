import { useState } from "react"


export const AddCategory = ({ onNewCategory}) => {

    const [inputValue, setinputVal]= useState('')

    const OnInputChange = (event) => {

       // console.log(event.target.value); // muestra letra por letra lo que se esta agregando
        setinputVal(event.target.value);  
        
    }


    const onSubmit = (event ) => {

        event.preventDefault()
        
        if(inputValue.trim().length <= 1) return;


       // console.log(inputValue)
        //setcategories(categories =>[inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setinputVal('');
    }

    return( 
         
        <form onSubmit ={onSubmit}>
    <input
        type = "text"
        placeholder = "Buscar gifs"
        value={inputValue}
        onChange={OnInputChange}

        
    />
    </form>  

    )
}
import React, { useState } from 'react'
// import {GifGrid} from '../src/components/GifGrid'
// import {AddCategory} from '../src/components/AddCategory'
import {GifGrid, AddCategory} from './components';

export const GifExpertApp = () => {
  
  const [categories, setcategories] = useState([])
  
  const onAddCategory =(NewCategory) =>{
    console.log(NewCategory);


    if (categories.includes(NewCategory))return;
    setcategories([...categories,NewCategory])
  }

  

  return (
    
    <>   
        <h1>GifExpertApp</h1>

        <AddCategory 
        onNewCategory={value => onAddCategory(value) }
        
        />
  
        {
        categories.map(category =>(
          <GifGrid key = {category} 
          category={ category }/>
                  
            ))
        }
                                                                                                                                                                                
        

    </>
  )

} 

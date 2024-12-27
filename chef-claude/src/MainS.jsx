import React from "react"

export default function MainS(){
    const [ingredients,stateIngredients ]=React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })
    function handleSubmit(event){
       event.preventDefault()
       const formData = new FormData(event.currentTarget)
       const newIngredient = formData.get("ingredient")
       stateIngredients(prevIngredient => [...prevIngredient,newIngredient])

    }
    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input type="text"
                        placeholder="e.g. oregano"
                        name="ingredient" 
                        aria-label="Add-Ingredient"        
                />
                <button > Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}
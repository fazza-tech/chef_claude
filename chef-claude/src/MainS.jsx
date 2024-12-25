export default function MainS(){
    const ingredients = ["Chicken","Oregano","Tomatoes"];

    const ingredientsListItems = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })
    function handleSubmit(){
        console.log("submitted")
    }
    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input type="text"
                        placeholder="e.g. oregano"
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
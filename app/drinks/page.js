const drinksPage=async () => {
    const response=await fetch("https://api.openai.com/v1/models")
    const data=await response.json()
    return(
        <div>
            <h1>Drinks</h1>
        
        </div>
    )
}

export default drinksPage;
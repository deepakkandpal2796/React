function Section(){
    const foodItem = 'Lays';
    const drinkItem = 'Coke';
    return(
        <>
        
        <p><b>Select the food item</b></p>
        <select>
            <option value="#">Pizza</option>
            <option value="#">{foodItem}</option>
            <option value="#">{drinkItem}</option>
        </select>
        </>
    );
}

export default Section
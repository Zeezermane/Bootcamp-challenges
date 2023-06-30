let shoppingList = ['pop tarts','ramen noodles', 'chips', 'salsa', 'coffee'];

    shoppingList.push('fruit loops');
shoppingList[4] = 'fair trade coffee';
    //shoppingList.splice(-1, 1, 'fair trade coffee');

    shoppingList.splice(2,2, 'rice');

    let shoppingCart = [];
    shoppingCart.push(shoppingList.pop());
    shoppingCart.push(shoppingList.shift());
    

    while (shoppingList.length > 0) {
        shoppingCart.push(shoppingList.pop());
        
        
    }
    shoppingCart.sort().reverse();
    console.log(shoppingList);
    console.log(shoppingCart.toString());
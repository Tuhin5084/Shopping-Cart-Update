
removeItem('phone-remove', 'phone-area');
removeItem('case-remove', 'case-area');


function productUpdate(product, isIncrease, price, sub){

    const productInput = document.getElementById(product);
    const productCount = parseInt(productInput.value);
    
    let newProductCount = productCount;

    if(isIncrease == true){

        newProductCount = productCount + 1;
    }

    else if(isIncrease == false && productCount > 0){
        newProductCount = productCount - 1;
    }
    productInput.value = newProductCount;

    const productPrice = newProductCount * price;
    document.getElementById(product + '-price').innerText = productPrice;
   
    calculateTotal()

   
}

function calculateTotal(){

    const phonePrice = getInput('phone');
    const casePrice = getInput('case');

 

    const subtotalPrice = phonePrice * 1219 + casePrice * 59;

    document.getElementById('subtotal').innerText = subtotalPrice;

    const taxPrice = Math.round(subtotalPrice * .05);

    document.getElementById('tax').innerText = taxPrice;

    const totalPrice = subtotalPrice + taxPrice;
    
    document.getElementById('total').innerText = totalPrice;


}

function getInput(product){

    const productInput = document.getElementById(product);
    const productCount = parseInt(productInput.value);

    return productCount;
}

//remove item

function removeItem(productRemove, productArea){

    document.getElementById(productRemove).addEventListener('click', function(){

        alert('Are You Sure You Want to Remove This Product and all Your calculation');
        document.getElementById('product-calculation').style.display = 'none';
        document.getElementById(productArea).style.display = 'none';
    })
}

//checkout

document.getElementById('checkout').addEventListener('click', function(){

    document.getElementById('main-area').style.display = 'none';
    document.getElementById('next-page').style.display = 'block';
})
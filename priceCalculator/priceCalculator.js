function getCalculation() {
    let item = document.getElementById("item").value;
    let quantity = document.getElementById("quantity").value;
    
    if (item === "") {
        document.getElementById("output").innerHTML=
        "<p><b>Please Select a Item</b></p>"
        return;
    }
    if (quantity === "") {
        document.getElementById("output").innerHTML=
        "<p><b>Please Enter a Quantity</b></p>"
        return;
    }
    quantity =Number(quantity);
    let price 
    switch(item){
        case "apple":
            price = 20;
            break;
        case "milk":
            price = 30;
            break;
        case "bread":
            price = 40 ;
            break;
    }
     
    let total = price * quantity;

    let discount 
    if (quantity > 10 && total > 500 ){
        discount = total * 0.20;
    }
    else if ( quantity > 10) {
        discount = total * 0.10;
    }
    else if (total > 500) {
        discount = total * 0.15;
    }

    let finalAmount = total - discount;

    let message = discount > 0 ? `You Saved Rs : ${discount}` : "No discount applied.";

    document.getElementById("output").innerHTML=
    `
    <p><b>Item :</b> ${item}</p>
    <p><b>Quantity :</b> ${quantity}</p>
    <p><b>Total :</b> ${total}</p>
    <p><b>Discount :</b> ${discount}</p>
    <p><b>Final Amount :</b> ${finalAmount}</p>
    <hr>
    <p><b>${message}</b></p>
    `;
}



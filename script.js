
const addItem = document.getElementById("addItem");
    addItem.addEventListener('click', function(){
       const itemOneTotal = singleItemAdd("quantity",100);
       document.getElementById("unitPrice").innerText = itemOneTotal;
     });  
const addItem1 = document.getElementById("addItem1");
      addItem1.addEventListener('click',function(){
          const itemTwoTotal = singleItemAdd("quantity1",100);
          document.getElementById("unitPrice1").innerText = itemTwoTotal;         
      });       

const deleteItem = document.getElementById("deleteItem");
    deleteItem.addEventListener('click', function(){
       const itemOneTotalAfterdelete = singleItemDelete("quantity",100);
        document.getElementById("unitPrice").innerText = itemOneTotalAfterdelete;       
     });  


const deleteItem1 = document.getElementById("deleteItem1");
     deleteItem1.addEventListener('click', function(){
        const itemTwoTotalAfterdelete = singleItemDelete("quantity1",100);
         document.getElementById("unitPrice1").innerText = itemTwoTotalAfterdelete;        
      }); 

taxCalculation();
/**Funcion For Tax and sub-total Calculation */      
function taxCalculation(){
    const subTotal1 = converSpantext("unitPrice");
    const subTotal2 = converSpantext("unitPrice1");
    const subTotal = subTotal1 + subTotal2;
    const tax = subTotal*0.15;
    const grandTotal = subTotal + tax ;
    document.getElementById("subTotal").innerText = subTotal;   
    document.getElementById("tax").innerText = tax;      
    document.getElementById("grandTotal").innerText = grandTotal; 
}     

const removeItem1 = document.getElementById("remove-item1");
    removeItem1.addEventListener("click", function(){
        hideBlock("cartItem1");

    });
const removeItem2 = document.getElementById("remove-item2");
    removeItem2.addEventListener("click", function(){
        hideBlock("cartItem2");

    });

    function converSpantext(id){
        return parseFloat(document.getElementById(id).innerText);
    }
    function singleItemAdd(id,unitPrice){
        const qunatity = document.getElementById(id).value;
        const quantityNumber = parseFloat(qunatity);
        const newQuantity = quantityNumber + 1 ;
        document.getElementById(id).value = newQuantity;
        const totalPrice = unitPrice * newQuantity;
        return totalPrice;
     }

     function singleItemDelete(id,unitPrice){
        const qunatity = document.getElementById(id).value;
        const quantityNumber = parseFloat(qunatity);
        const newQuantity = quantityNumber - 1 ;
        document.getElementById(id).value = newQuantity;
        const totalPrice = newQuantity * unitPrice;
        return totalPrice;
     }

    function hideBlock(id){
        const cartItem1 = document.getElementById(id);
        cartItem1.style.display = "none";
        
    } 



    /*
    //add single item
    const addItem = document.getElementById("addItem");
    addItem.addEventListener('click', function(){
       //alert("add button clicked");
    //    const qunatity = document.getElementById("quantity").value;
    //    const quantityNumber = parseFloat(qunatity);
    //    const newQuantity = quantityNumber + 1 ;
    //    document.getElementById("quantity").value = newQuantity;

    //    const unitPrice = 100;
    //    const totalPrice = unitPrice * newQuantity;
       const itemOneTotal = singleItemAdd("quantity",100);
       document.getElementById("unitPrice").innerText = itemOneTotal;
     });    

     // Delete sigle Item

 const deleteItem = document.getElementById("deleteItem");
    deleteItem.addEventListener('click', function(){
       alert("add button clicked");
       const qunatity = document.getElementById("quantity").value;
       const quantityNumber = parseFloat(qunatity);
       const newQuantity = quantityNumber - 1 ;

       const totalPrice = document.getElementById("unitPrice").innerText;
       document.getElementById("unitPrice").innerText = totalPrice - 100;
       document.getElementById("quantity").value = newQuantity;

     });  











*/
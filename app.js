var espresso={
    milk:60,
    cream:75,
    latte:100,
    getAmount: function(){
      return this.milk + this.cream + this.latte
    },
    addMilk: function(){
       return this.milk
    },
     addCream: function(){
       return this.cream
    },
     addLatte: function(){
       return this.latte
    }
 }
 
 var cappuccino={
    milk:80,
    cream:90,
    latte:125,
     getAmount: function(){
      return this.milk + this.cream + this.latte
    },
    addMilk: function(){
       return this.milk
    },
     addCream: function(){
       return this.cream
    },
     addLatte: function(){
       return this.latte
    }
 }
 var Latte={
    milk:100,
    cream:125,
    latte:150,
     getAmount: function(){
      return this.milk + this.cream + this.latte
    },
    addMilk: function(){
       return this.milk
    },
     addCream: function(){
       return this.cream
    },
     addLatte: function(){
       return this.latte
    }
 }
 
 var espressoB = document.querySelector('#espresso');
 var cappuccinoB = document.querySelector('#cappuccino');
 var LatteB = document.querySelector('#latte');
 var milkB = document.querySelector('#milk');
 var creamB = document.querySelector('#cream');
 var lattB = document.querySelector('#latt');
 var display= document.querySelector('.append')
 var bill = document.querySelector('#bill')
 var result = document.querySelector('#total')
 var total=0;
 
 
 espressoB.onclick=function(){
  display.innerHTML+=`<div class="box"> <strong>Espresso/${espresso.getAmount()}</strong></div> `;
  total+=espresso.getAmount();
 
     
 }
 
 
 cappuccinoB.onclick=function(){
 
   display.innerHTML+=`<div class="box"> <strong>Cappuccino/${cappuccino.getAmount()}</strong></div>`;
   total+=cappuccino.getAmount();
  
 }
 
 LatteB.onclick=function(){
  
   display.innerHTML+=`<div class="box"> <strong>Latte/${Latte.getAmount()}</strong></div>`;
   total+=Latte.getAmount();
   
 
}
 milkB.onclick=function(){
    let coffeeType=prompt("In which coffe do you want to add milk");
    if(coffeeType==coffeeType.match(/cappuccino/gi)){
     
      display.innerHTML+=`<div class="box"> <strong>Milk On Cappuccino/${cappuccino.addMilk()}</strong></div>`;
      total+=cappuccino.addMilk();
      var delete_tasks=document.querySelectorAll(".delete");
  
 }
    
    if(coffeeType==coffeeType.match(/espresso/gi)){
    
     display.innerHTML+=`<div class="box"> <strong>Milk On Espresso/${espresso.addMilk()}</strong></div>`;
     total+=espresso.addMilk();
     
 
    }
    if(coffeeType==coffeeType.match(/latte/gi)){
   
    display.innerHTML+=`<div class="box"> <strong> Milk On Latte/${Latte.addMilk()}</strong><div>`;
    total+=Latte.addMilk()
    
    }
   }
    
 
 creamB.onclick=function(){
    let coffeeType=prompt("In which coffe do you want to add cream");
    if(coffeeType==coffeeType.match(/cappuccino/gi)){
     
      display.innerHTML+=`<div class="box"> <strong>Cream On Cappuccino/${cappuccino.addCream()}</strong></div>`;
      total+=cappuccino.addCream();
   
      }
 
    
    if(coffeeType==coffeeType.match(/espresso/gi)){
    
      display.innerHTML+=`<div class="box"> <strong>Cream On Espresso/${espresso.addCream()}</strong></div>`;
      total+=espresso.addCream();
      
 }
    
    if(coffeeType==coffeeType.match(/latte/gi)){
    
    display.innerHTML+=`<div class="box"> <strong>Cream On Latte/${Latte.addCream()}</strong></div>`;
    total+=Latte.addCream();
   
 }
}
    
 
 lattB.onclick=function(){
    let coffeeType=prompt("In which coffe do you want to add latte");
    if(coffeeType==coffeeType.match(/cappuccino/gi)){
   
      display.innerHTML+=`<div class="box"> <strong>Latte On Cappuccino/${cappuccino.addLatte()}</strong></div>`;
      total+=cappuccino.addLatte();
      
 }
    
    if(coffeeType==coffeeType.match(/espresso/gi)){
    
     display.innerHTML+=`<div class="box"> <strong>Latte On Espresso/${espresso.addLatte()}</strong></div>`;
     total+=espresso.addLatte();
     
 }
    
    if(coffeeType==coffeeType.match(/latte/gi)){
    
    display.innerHTML+=`<div class="box"> <strong>Latte On Latte/${Latte.addLatte()}</strong></div>`;
    total+=Latte.addLatte();
    
 }
}
    
  
 bill.onclick=function(){
   
   result.innerHTML= `<div class="box" style="font-size:large; background-color:#E3C770;">
      <h1><strong>Total Bill is Rs ${total} </strong></h1>
      </div>`
 
  }
  
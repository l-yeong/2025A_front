function getInventory(){
    let Inventory=localStorage.getItem('Inventory')
    if(Inventory==null){
        Inventory=[];
    }return Inventory;
}

function setInventory(Inventory){
    localStorage.setItem('Inventory', JSON.stringify(Inventory));
}
function stockIn(){ console.log( "stockIn exe" )
   
}
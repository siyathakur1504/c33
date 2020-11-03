class Game{
    constructor(){

    }
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState=data.val();
        })

    }
    update(name){
        database.ref('/').update({
            gameState:name
        })
    }
    start(){
        if (gameState===0){
            player=new Player();
            player.getCount();
            form= new Form();
            form.display()
        }
    }
}
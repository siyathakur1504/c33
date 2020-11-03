class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);
        var input= createInput("name");
        var button=createButton("play");
        input.position(130,160);
        button.position(250,200);
        var greeting=createElement("h3");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1;
            player.updateCount(playerCount);
            player.update(name);
            greeting.html("Hello "+name);
            greeting.position(130,160);

        });

    }
}
class Script{
constructor(){
this.button = createButton("Play");
this.button.visiblity = false
}

display(){
    background(scriptImg)
   
    this.button.position(displayWidth/2,displayHeight-200)
    if(playerCount === 2){
        this.button.visiblity = true
        this.button.mousePressed(()=>{
            this.button.hide();
        
                gameState = 1
            })
    }
   

        
        


}
}
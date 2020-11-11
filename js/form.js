class Form{
 constructor() {
    this.input=createInput("name")
    this.button = createButton("play")
    this.greeting=createElement("h3")
    this.reset= createButton("reset")
 }

 display(){
     var title=createElement("h2")
     title.html("carRacingGame")
     title.position(displayWidth/2-90,0)
     
     this.input.position(displayWidth/2-50,displayHeight/2-50)
     this.button.position(displayWidth/2-50,displayHeight/2)
     this.reset.position(displayWidth-100,100)

     this.button.mousePressed(()=>{
         this.input.hide()
         this.button.hide()
         player.name=this.input.value()
         playerCount+=1
         player.index=playerCount;
         player.update()
         player.updateCount(playerCount)
        
         this.greeting.html("hello "+ player.name)
         this.greeting.position(displayWidth/2-50,displayHeight/2-50)
     })
     this.reset.mousePressed(()=>{
        player.updateCount(0)
        game.update(0)
        Player.updateCarsAtEnd(0);
        location.reload()
     })
 }

  hide(){
      this.input.hide()
      this.greeting.hide()
      this.button.hide()
  }
}
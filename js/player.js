class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=null;
        this.rank=0;
    }

    getCount(){
        var playerCountRef=database.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount=data.val()
        })
    }

    getCarsAtEnd(){
        var carsAtEndRef=database.ref("carsAtEnd")
        carsAtEndRef.on("value",function(data){
            this.rank=data.val()
        })
    }

static updateCarsAtEnd(rank){
    database.ref("/").update({
        carsAtEnd:rank
    })
}

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(){
        var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
   static getPlayerInfo(){
       database.ref("players").on(
           "value",(data)=>{
               allPlayers=data.val()
           }
       )
   }
}
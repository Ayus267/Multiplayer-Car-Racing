class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function (data){
        playerCount = data.val();
        //console.log(data.val());
     });
    }

  updateCount(count) {
    database.ref("/").update({
    playerCount: count
    });
  }

//   update(){
//     var playerIndex = database.ref('players/player'+this.index);
//     this.positionX=data.positionX;
//     this.positionY=data.positionY;
//     console.log(data.val());
//  });
// }

  getPlayersInfo(){
   var playerInfoRef = database.ref("players");
   playerInfoRef.on("value",data=>{
   allPlayers = data.val();
  });
}

  getDistance(){
    var playerDistRef = database.ref('players/player'+this.index);
    playerDistRef.on("value",function (data){
    data = data.val();
    this.positionX=data.positionX;
    this.positionY=data.positionY;
    console.log(data.val());
 });
}

  addPlayer() {
    var playerIndex = "players/player" + this.index; 

    if (this.index === 1) { 
      this.positionX = width / 2 - 100; 
    }

      else 
      { this.positionX = width / 2 + 100; 
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    })
  }
}
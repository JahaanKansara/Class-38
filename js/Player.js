class Player {
  constructor(){
  this.name=null;
  this.index=null;
  this.distance=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:this.name,distance:this.distance 
    });
  }

static getPlayerInfo(){
 var playerInforef=database.ref("players");
 playerInforef.on("value",(data)=>{
  allPlayer = data.val();
})
  

}


}

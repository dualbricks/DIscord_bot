module.exports = {
  name : 'tic_tac_toe',
  description : 'tic tac toe game ',
  excute(msg) {
    var play_grid = [1,2,3,4,5,6,7,8,9]
    var players = 0;
    if(players == 0) {
      player1 = msg.author.id
      players += 1
    }
    
    if(players == 1 && msg.author.id != player1) {
      player2 = msg.author.id
      players += 1
    }
    
    if(players == 2) {
    fucntion is_winner?(player,symbol) {
      if
    
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
      var turn = 1
      function is_winner(symbol) {
        var hori_1 = play.grid[0] + play.grid[1] + play.grid[2] 
        var hori_2 = play.grid[3] + play.grid[4] + play.grid[5]
        var hori_3 = play.grid[6] + play.grid[7] + play.grid[8]
        var vert_1 = play.grid[0] + play.grid[3] + play.grid[6]
        var vert_2 = play.grid[1] + play.grid[4] + play.grid[7]
        var vert_3 = play.grid[2] + play.grid[5] + play.grid[8]
        var diag_1 = play.grid[0] + play.grid[4] + play.grid[8]
        var diag_2 = play.grid[2] + play.grid[4] + play.grid[6]
        if( hori_1 == `${symbol * 3}` || hori_2 == `${symbol * 3}` || hori_3 == `${symbol * 3}` || 
          vert_1 == `${symbol * 3}` || vert_2 == `${symbol * 3}`  || vert_3 == `${symbol * 3}` ||
          diag_1 == `${symbol * 3}` || diag_2 == `${symbol * 3}`) {
        return true
        }
      }
      function main_game(player,turn) {
        if(
        

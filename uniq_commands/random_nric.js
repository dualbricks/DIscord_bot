module.exports = {
    name : 'random_nric',
    description: 'Generate Random IC',
    usage: 'random_nric',
    execute(msg) {
        function is_valid_nric(n) {
            var str1 = `${n}`
           var for_s_t = "JZIHGFEDCBA"
            var for_f_g = "XWUTRQPNMLK"
            var checksum = (+str1.charAt(1) * 2) + (+str1.charAt(2) * 7) + (+str1.charAt(3)* 6) + (+str1.charAt(4) * 5) + (+str1.charAt(5) * 4) + (+str1.charAt(6) * 3) + (+str1.charAt(7) * 2);
             var check = `${str1.charAt(8)}`;   
          
            var check1 =  +for_s_t.indexOf(check);
         
            var check2 =  +for_f_g.indexOf(check);
         
            if(str1.charAt(0) == "G" || str1.charAt(0) == "T") {
                checksum += 4;
            }
            
            if((str1.charAt(0) == "T" || str1.charAt(0) == "S") && (checksum % 11) == check1) {
                return true ;
            }
            
            else if((str1.charAt(0) == "F" || str1.charAt(0) == "G") && (checksum % 11) ==  check2) {
                return true ;
            }
            else {
                return false ;
            }
        }
        function random_gen() {
          var  starting_letter = "GTSF"
           var ending_letter = "JZIHGFEDCBAXWUTRQPNMLK"
           var digits = "1234567890"
           var nric = ""
             nric += `${starting_letter.charAt(Math.floor((Math.random()*3)))}`
            for (var i = 0; i < 7; i++) {
                nric += `${digits.charAt(Math.floor((Math.random()*9)))}`
            }
            nric += `${ending_letter.charAt(Math.floor((Math.random()*21)))}`
            return nric
        }
        
            var rand_nric= random_gen()
            while(is_valid_nric(rand_nric) == false || rand_nric[1] > 1 || rand_nric[2] > 8 ) {
            rand_nric = random_gen()
            }
            msg.reply(`This is your new NRIC hehehe ${rand_nric}`);      
        }
}
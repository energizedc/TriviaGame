

////////////////////////////////////////////////////////////
//                   Variables                            //
//                                                        //
////////////////////////////////////////////////////////////
var count=10;
var process1 = false;

//  var timer = 0 ;
var corransw = ["c", "c", "a", "c"];
var i = 0 ;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var numquest = 4;
//////////////////////////////////////////////////////////////    



    
    ////////////////////////////////////////////////////////////////////////
    //
    //       M A I N  F U N C T I O N 
    //
    ////////////////////////////////////////////////////////////////////////

    //function buttonclick() {  ///this is AFTER Hitting the [submit] button
        
     
       var counter=setInterval(timer, 1000); //1000 will  run it every 1 second  
       
       


       

        console.log(count);
               
        console.log("its working");
       
        function timer(){
            count=count-1;
            console.log(count);
                if (count <= 0){
                    console.log("this is counter in upper loop    " + count);
                    clearInterval(counter);
                    document.getElementById("timer1").innerHTML = "Times Up !! " + count;
                  
                    
               
        
        ////////////////////////////////////////////
        //gather the users' answsers
        ///////////////////////////////////////////
        
        var quest0 = document.forms['allquestions']['quest0'].value;
        var quest1 = document.forms['allquestions']['quest1'].value;
        var quest2 = document.forms['allquestions']['quest2'].value;
        var quest3 = document.forms['allquestions']['quest3'].value;
          
       //verify you can read answers 
        console.log(quest0);
        console.log(quest1);            
        console.log(quest2);
        console.log(quest3);


        ////////////////////////////////////////////////////////////////////////
        //
        //check for null values and compare correct answers to users answers        
        //
        ///////////////////////////////////////////////////////////////////////   
        
        console.log('STARTING');

        for(var i = 0 ; i < numquest; i++){

          
          //check for if not answered

            if (eval('quest'  + i) == corransw[i]){
                correct++;
                console.log("i am in correct");

        } else
        
            if (eval('quest'  + i) == '') {
                
                unanswered++;
               
                console.log('i am in unanswered');
            }else
                if (eval('quest'  + i) != corransw[i]){
                    incorrect++;
                   
                    console.log('i am in incorrect');
                }
                       
          document.getElementById("results1").innerHTML = "Correct:   " + correct;
          document.getElementById("results2").innerHTML = "Incorrect:   " + incorrect;
          document.getElementById("results3").innerHTML = "Unanswered:   " + unanswered;   
        
         
        
        }
    
    
    }else                           ////else is from timer() function 'if' statement


                console.log("this is counter in lower loop                " + count);

                    document.getElementById("timer1").innerHTML = count + " secs"; // watch for spelling
                    
            }
        

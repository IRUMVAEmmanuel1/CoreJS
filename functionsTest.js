letterFinder(word,match)
{


    for(var i; i<word.length; i++){
       if(word[i] == match){
        console.log('Found the match',match,"at",i)
       } 
       else{
        console.log('----No Match found at',i)
       }
    }
}
letterFinder("test","t")
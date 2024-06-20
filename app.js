var t = 59
mi = 9
setInterval(function(){
    var time = document.getElementById('time')
    t--
    time.innerHTML = t
    if(t==1){
        var min= document.getElementById('min')
        mi--
        min.innerHTML = mi
        t=60
    }
},1000)

function btn(){
    var index = 0
    index++
var show = document.getElementById('question')
fetch('https://opentdb.com/api.php?amount=10&category=21')
    .then((abc) => abc.json())
    .then((abc) => {
        
        show.innerHTML = `<div>Q : 
        ${abc.results[index].question}<br><br>
        <input id="" type="radio" name="xyz"><label for="">1. ${abc.results[index].incorrect_answers[0]}</label><br>
        
        <input id="" type="radio" name="xyz"><label for=""></label>2. ${abc.results[index].incorrect_answers[1]}<br>
        
        <input id="" type="radio" name="xyz"><label for=""></label>3. ${abc.results[index].incorrect_answers[2]}<br>
        
        <input id="" type="radio" name="xyz"><label for=""></label>4. ${abc.results[index].correct_answer}</div><br>  
        `
    })
    
    .catch(abc => console.log(abc))}
    
    btn()

    // function btn(){
    // for (var i = 0; i < abc.results.length; i++) {
    //}
//     index
// }
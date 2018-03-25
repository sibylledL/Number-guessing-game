/*var ordi = function getRandomIntInclusive(min, max) {
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * 100);
}*/



  var result = document.querySelector('#result');
  var input = document.getElementById('playerTry');
  var lastguess = document.querySelector('#lastguess');
  var guess = document.querySelector('#guess');
/*test pour choix d'intervalle*/


    var ordi =  Math.floor(Math.random() * 100);
  


/*fin de test */

/*  var ordi =  Math.floor(Math.random() * 100);*/

/*CLEAR*/
  var clear = document.getElementById('clear');
  clear.disabled = true;
  clear.addEventListener('click',erase,false)
  function erase(){
      input.value = "";
  }

/*RESET*/
  var reset = document.getElementById('reset');
  reset.addEventListener('click',newOrdi,false)
  reset.disabled = true;
  function newOrdi(){
  var ordi2 = Math.floor(Math.random() * 100);
  ordi = ordi2;
    input.value = "";
    result.innerHTML="";
    lastguess.innerHTML = "";
    clear.disabled = true;
    reset.disabled=true;
  }


/*PLAY*/


guess.addEventListener('click',play,false);

function play(){

/*condition pour commencer le jeu*/
if(input.value.match(/([a-z])/)){
  alert("just number please")
  erase()

}else if(parseInt(input.value)>100||parseInt(input.value)<1){
  alert('between 1 and 100 please')
  erase()

}else{
  lastguess.innerHTML = parseInt(input.value)
  clear.disabled = false;
  reset.disabled=false;
}
/* fin des conditions pour commencer le jeu*/

  if (parseInt(input.value) == ordi){
    return result.innerHTML = "BOOM!"
  }else if (parseInt(input.value)<ordi){
    return result.innerHTML = "That's too low"
  }else if(parseInt(input.value)>ordi){
  return result.innerHTML = "That's too high"
}

}

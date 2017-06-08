var quote=document.getElementById("quote");
var click = document.getElementById("button");
var quoteList = ["'Eating green eggs will greatly improve your chances to become a donkey with magical powers.'",  
"'Always remember to brush your teeth at least 10 times a day, if you want your teeth to glow in the dark.'",  
"'Dying your hair purple will guarantee you that great promotion at work.'",  
"'Giraffes have such long eyelashes, it's no wonder they are good with mascaras.'",  
"'Simply say 'Blue Flame Ford' really fast without saying 'Blue Flame Flord'.", 
"'Cockroaches have feelings too. Try not to slam them with your house shoes.'", 
"'That smell you smell when you smell something smelly.'", 
"'Roosters like to sleep with the night light on.'", 
"'If you look out your window between 2am and 4am, the moon turns into a purple disco ball.'", 
"'Rats will one day take over the world and the entire earth will smell like cheese.'", 
"'The tooth fairy is actually a retired dentist named Larry Skorcke, who lives in Boris, Wisconsin.'", 
"'If you don't throw away rotting food, it will one day turn into a creature with green fuzzy hair.'", 
"'Trees can get easily offended if a person walks by them without giving them a hug.'", 
"'Bathing in the ocean will one day turn you into an aquarium.'", 
"'If you want free groceries, spoon feed your fridge Nachos.'", 
"'A computer mouse is a better pet than a real mouse.'"]; 
var randomQuote=function(){
  var index = Math.floor(Math.random()*quoteList.length);
  quote.innerHTML=quoteList[index];
  
$('#twitter').attr('href', 'https://twitter.com/intent/tweet?text='+quoteList[index]).attr('target', '_blank');
};

randomQuote();  
click.addEventListener('click',randomQuote,false);
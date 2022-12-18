function show(name)
{
  var elem=document.getElementById(name);
  if (elem)
     elem.style.display="block"
}



function shownt(name)
{ 
  var elem = document.getElementById(name).style.display='none';
}


function check()
{
  if ( calс.answer.value == "Сортавала" )
       alert("Правильно");
  else alert("Неправильно");
}
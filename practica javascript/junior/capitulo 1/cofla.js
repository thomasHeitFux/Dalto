let dineroCofla = prompt("cuantos dolares tenes?");


if(dineroCofla >= 10 && dineroCofla <19 ){
    alert("helado de agua");
    alert( "y te sobran "+ (dineroCofla - 10) + " dolares")
}
else if(dineroCofla >= 20 && dineroCofla <29 ){
    alert("bombon helado");
    alert( "y te sobran "+ (dineroCofla - 20) + " dolares")
}
else if(dineroCofla >= 30 && dineroCofla <39 ){
    alert("heladovich");
    alert( "y te sobran "+ (dineroCofla - 30) + " dolares")
}
else if(dineroCofla >= 40 && dineroCofla <49 ){
    alert("helardo");
    alert( "y te sobran "+ (dineroCofla - 40) + " dolares")
}
else if (dineroCofla >=50 && dineroCofla < 999999999999999999999999999999){
    alert("te alcanza para comprarte una provincia argentina");
    alert( "y te sobran "+ (dineroCofla - 50) + " dolares para comprar venezuela ")
}
else {
    alert("no te alcanza  para nada ,pobre de mierda");
}
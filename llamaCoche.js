// import Coche from './coche';
// let ford = new Coche('Ford','5 puertas');
// ford.arrancar();


// callback
function correr(callback_meta) {

    var tiempo_en_llegar_en_milis=Math.floor((Math.random()*60000)+1000);
    console.log(tiempo_en_llegar_en_milis);
    setTimeout(() => {
        var tiempo_en_llegar_en_seg=(tiempo_en_llegar_en_milis/1000);
        tiempo_en_llegar_en_seg=Math.round(tiempo_en_llegar_en_seg*100)/100;
        callback_meta(tiempo_en_llegar_en_seg);
    }, tiempo_en_llegar_en_milis);
    console.log('algo :>> ', tiempo_en_llegar_en_milis/1000);
}

correr(function(tiempo_en_llegar_en_segundos){
    console.log("El caballo 1 llega a la meta en " +  tiempo_en_llegar_en_segundos + " segundos."); 
   }); 
correr(function(tiempo_en_llegar_en_segundos){
    console.log("El caballo 2 llega a la meta en " +  tiempo_en_llegar_en_segundos + " segundos."); 
   });
correr(function(tiempo_en_llegar_en_segundos){
    console.log("El caballo 3 llega a la meta en " +  tiempo_en_llegar_en_segundos + " segundos."); 
   });


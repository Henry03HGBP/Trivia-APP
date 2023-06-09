let base_preguntas = readText("base-preguntas.json")
let interprete_bp = JSON.parse(base_preguntas)
let pregunta 

function escogerPreguntaAleatoria(){
    escogerPregunta(Math.floor(Math.random()*interprete_bp.lenght))
}

function escogerPregunta(){
   pregunta = interprete_bp[n]
   select_id("categoria").innerHTML = pregunta.categoria
   select_id("pregunta").innerHTML = pregunta.pregunta
   select_id("imagen").setAttribute("src", pregunta.imagen)
   style("imagen").objectFit = pregunta.objectFit;
   
   if(pregunta.imagen){
    style("imagen").height="200px"
    style("imagen").width="100%"
   }else{
    style("imagen").height="0px"
    style("imagen").width="0px"
   }
}
let btns{
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
}
function desordenarRespuestas(pregunta){
    let posibles_respuestas =[
        pregunta.respuesta, 
        pregunta.incorecta1, 
        pregunta.incorecta2, 
        pregunta.incorecta3
    ]
    arr.sort(()=>Math.random()-0.5)
    select_id("btn1").innerHTML = arr[0]
   select_id("btn2").innerHTML = arr[1]
   select_id("btn3").innerHTML = arr[2]
   select_id("btn4").innerHTML = arr[3]
}

function oprimir_btn(i){
    console.log(posibles_respuestas[i])
}

function select_id(id){
    return document.getElementById(id)
}

function style(id){
    return select_id(id).style
}

function readText(ruta_local){
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if(xmlhttp.status == 200){
        texto = xmlhttp.responseText;
    }
    return texto;
}
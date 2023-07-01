
var lamp = window.document.getElementById('lampada')

function estaquebrada(){
 return lamp.src.indexOf('quebrada') > - 1

}

function liga(){
    if (!estaquebrada()){
    lamp.src = '/img_lampadas/ligada.svg'}

} 

function desliga(){
    if (!estaquebrada()){
        lamp.src = '/img_lampadas/desligada.svg'}
}

function quebrar(){
 lamp.src = '/img_lampadas/quebrada.svg'

}

















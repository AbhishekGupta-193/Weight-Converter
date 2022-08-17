var val=document.querySelector('.enter-value');
val.addEventListener('input',convert);

function convert(e){
    // var VAL =document.createTexNode(val.value)
    // console.log(e.target)
    // e.preventDefault();
    // console.log(2)
    // console.log(e.target)
    let lbs=e.target.value;
    document.querySelector('.unit-G').innerHTML= lbs/0.0022046;
    document.querySelector('.unit-KG').innerHTML= lbs/2.2046;
    document.querySelector('.unit-O').innerHTML= lbs*16;
// console.log(document.querySelector('.unit-G').innerHTML)


}

document.body.addEventListener('click',clear);
function clear(e){
    val.value='';
    document.querySelector('.unit-G').innerHTML= '';
    document.querySelector('.unit-KG').innerHTML= '';
    document.querySelector('.unit-O').innerHTML= '';
    // console.log(val.value)

}
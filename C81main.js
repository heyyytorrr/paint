canvas = document.getElementById('myCanvas');
ctx=canvas.getContext('2d');

color='black';
var positionX,positionY;
expessura=2;

var tamanho=screen.width;
novoTamanho=screen.width-70;
novaAltura=screen.height-300;
if(tamanho<992) {
    document.getElementById('myCanvas').width=novoTamanho;
    document.getElementById('myCanvas').height=novaAltura;
    document.body.style.overflow='hidden';
}

canvas.addEventListener('touchstart',myTouchStart);




function myTouchStart(e) {
    color=document.getElementById('Color').value;
    console.log('myTouchStart');
    positionX=e.touches[0].clientX-canvas.offsetLeft;
    positionY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener('touchstart',myTouchMove);
function myTouchMove(e) {
    console.log('myTouchMove');
    atualpositionX=e.touches[0].clientX-canvas.offsetLeft;
    atualpositionY=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=expessura;

    console.log('ultima posição das coordenadas X e Y = ')
    console.log('X= '+ultimapositionX+'Y= '+ultimapositionY)
    ctx.moveTo(ultimapositionX,ultimapositionY)

    console.log('atual posição das coordenadas X e Y = ')
    console.log('X= '+atualpositionX+'Y= '+atualpositionY)
    ctx.lineTo(atualpositionX,atualpositionY)
    ctx.stroke();

    ultimapositionX=atualpositionX
    ultimapositionY=atualpositionY
}



function limpar() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
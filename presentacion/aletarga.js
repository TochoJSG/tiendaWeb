const aletargar = document.querySelectorAll('.aletarga');//Add id to img element
//const image2 = document.getElementById('im2');
const load = (entradas,observador)=>{
<<<<<<< HEAD
	/*console.log(entradas);console.log(observador);*/
	entradas.forEach((entrada)=>{
		//console.log('div is on screen');
		if(entrada.isIntersecting) entrada.target.classList.add('visible');
			else entrada.target.classList.remove('visible');
	});
};
const observador = new IntersectionObserver(load, {	root:null,	rootMargin:'0px 0px 0px 0px',	thresholds:0.5});
for(var i=0; i<aletargar.length;i++){observador.observe(aletargar[i]);}
=======
	/*console.log(entradas);
	console.log(observador);*/
	entradas.forEach((entrada)=>{
		//console.log('div is on screen');
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
			}else{
				entrada.target.classList.remove('visible');
			}
	});
}
const observador = new IntersectionObserver(load,{
	root:null,
	rootMargin:'0px 0px 0px 0px',
	thresholds:0.5
});
for(var i=0; i<aletargar.length;i++){observador.observe(aletargar[i]);}
>>>>>>> 57f16565d94fc5722f6b7949232ee9399a0c284f

const urlAMZ='negocio/amz.json';
<<<<<<< HEAD
const targetasAmz=document.querySelector('.containerCardAmz');
const carrusel=document.querySelector('#carrusel-gral');
document.addEventListener('DOMContentLoaded',pedirDataAmz);
document.addEventListener('scroll',pedirDataCarr);
function pedirDataCarr(){
    fetch(urlAMZ).
    then(response=> response.json() ).
    then(data=>	pintarCarrusel(data) ).
    catch(error=>console.log(error));
}
function pedirDataAmz(){
    fetch(urlAMZ).
    then(response=> response.json() ).
    then(data=> pintarCards(data) ).
    catch(error=>console.log(error));
}
/*const pedirDtaBD = async() =>{
    const peticion = await fetch('https://tochamateriasprimas.com/productos.php');
    const productos = await peticion.json();
    console.log(productos);
};*/
const pintarCards = data =>{
	let plantilla1 = '';
	data.forEach(item=>{
	if(item.clase==="mascota"){   
    	plantilla1+=`<div class="contCardAmz">
    	<div class="coverLaCard">
    		<img src="${item.imBase}" alt="Error en la carga..." />
    	</div>
    	<div class="detailsLaCard">
    	<div>
    		<img src="${item.imProd}" alt="Error al cargar la imagen de ${item.title}"/>
    		<h2>${item.title}</h2>
    		<a target="_blank" href="${item.url}">Ver en Amazon</a>
    	</div>
    	</div>
    	</div>`;
	}
	});
	targetasAmz.innerHTML = plantilla1;
};
const pintarCarrusel = data =>{
=======
//const targetasAmz=document.querySelector('.containerCardAmz');
const carrusel=document.querySelector('.seccion');
//document.addEventListener('DOMContentLoaded',pedirDataAmz);
document.addEventListener('scroll',pedirDataCarr);
function pedirDataCarr(){
fetch(urlAMZ).then(response=>
	response.json()).then(data=>{
			console.log(data);
			pintarCarrusel(data);
		}).catch(error=>console.log(error));
}
/*function pedirDataAmz(){
fetch(urlAMZ).then(response=>
	response.json()).then(data=>{
			console.log(data);
			pintarCards(data);
		}).catch(error=>console.log(error));
}*/
/*const pintarCards=data=>{
	let plantilla1='';
	data.forEach(item=>{
	if(item.clase==="mascota"){   
	plantilla1+=`<div class="contCardAmz">
	<div class="coverLaCard">
		<img src="${item.imBase}"/>
	</div>
	<div class="detailsLaCard">
	<div>
		<img src="${item.imProd}"/>
		<h2>${item.title}
			</h2>
		<a target="_blank" href="${item.url_ml}">Ver en Amazon
			</a>
	</div>
	</div>
	</div>`;
	}
	});
	targetasAmz.innerHTML=plantilla1;
}*/
const pintarCarrusel=data=>{
>>>>>>> 57f16565d94fc5722f6b7949232ee9399a0c284f
	let plantilla2='';
	data.forEach(item=>{
	if(item.clase=="matprimas"||item.plataforma=="ml"){
	plantilla2+=`<div class="prod_car">
				<picture>
					<div class="imgBx">
<<<<<<< HEAD
					    <img src="${item.imProd}" alt="loading..." />
=======
					<img src="${item.imProd}" alt="loading..."/>
>>>>>>> 57f16565d94fc5722f6b7949232ee9399a0c284f
					</div>
				</picture>
				<div class="details_car">
					<h2>${item.title}</h2>
<<<<<<< HEAD
					<a target="_blank" href="${item.url}">Ver en Amazon</a>
=======
					<a target="_blank" href="${item.url}">Ver en Amazon
						</a>
>>>>>>> 57f16565d94fc5722f6b7949232ee9399a0c284f
				</div>
			</div>`;
	}
	});
	carrusel.innerHTML=plantilla2;
<<<<<<< HEAD
}
=======
}
>>>>>>> 57f16565d94fc5722f6b7949232ee9399a0c284f

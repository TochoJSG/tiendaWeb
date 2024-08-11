<<<<<<< HEAD
const addProduct = (idProducto,token_tmp)=>{
    let formData = new FormData();
	formData.append('idProducto',idProducto);
	formData.append('token_tmp',token_tmp);
	let validacion = 'negocio/clases/carrito.php';
	const opcionesPeticion = { method:'POST', body:formData, mode:'cors', credentials:"same-origin" };
	fetch(validacion,opcionesPeticion)
	.then(response=>response.json())
	.then(data=>{ let elemento = document.querySelector("#num_cart");
		if(data.ok)	elemento.innerHTML = data.numero;
		//}else{console.log('id->',idProducto,'token->',token_tmp)}
	})
	.catch(console.error);
};
=======
const addProduct = (idProducto,token)=>{
    console.log('\n\n Entramoa a Funcion::Recibimos id->'.idProducto,'token->'.token)
	let url='negocio/clases/carrito.php';
	let formData=new FormData()
	formData.append('idProducto',idProducto)
	formData.append('token',token)
	fetch(url,{
		method:'POST',
		body:formData,
		mode:'cors'
	}).then(response=>response.json()).then(data=>{
	    let elemento=document.querySelector("#num_cart");
	    console.log('peditos al formatear a json',elemento);    
		if(data.ok){
			elemento.innerHTML=data.numero;
		}else{console.log('id->'.idProducto,'token->'.token)}
	});
}


/*
const addCarrito=e=>{
    if(e.target.classList.contains('btn-dark')){//btn-dark => card button for buying
        // console.log(e.target.dataset.id)// console.log(e.target.parentElement)
        setCarrito(e.target.parentElement);
    }
    e.stopPropagation();
}

const setCarrito=item=>{//Function that handles Card Data
    // console.log(item)
    const producto={
        title:item.querySelector('h5').textContent,precio:item.querySelector('span').textContent,id:item.querySelector('button').dataset.id,cantidad:1
    }//Data from JSON to Card
    //console.log(producto);
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad=carrito[producto.id].cantidad+1;
    }
    carrito[producto.id]={...producto}
    pintarCarrito();
}//End of Function that handles Card Data

const pintarCarrito=()=>{
    items.innerHTML='';
    Object.values(carrito).forEach(producto=>{
        templateCarrito.querySelector('th').textContent=producto.id
        templateCarrito.querySelectorAll('td')[0].textContent=producto.title
        templateCarrito.querySelectorAll('td')[1].textContent=producto.cantidad
        templateCarrito.querySelector('span').textContent=producto.precio * producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id=producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id=producto.id
        const clone=templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    });
    items.appendChild(fragment);
    pintarFooter();
    localStorage.setItem('carrito',JSON.stringify(carrito));
}

const pintarFooter=()=>{//Buy Process; Global Buy Button
    footer.innerHTML='';
    if(Object.keys(carrito).length===0){
        footer.innerHTML=`<th scope="row" colspan="5">Carrito Vacío</th>`
        return
	}
const nCantidad=Object.values(carrito).reduce((acc,{cantidad})=>acc+cantidad,0);
const nPrecio=Object.values(carrito).reduce((acc,{cantidad,precio})=>acc+cantidad*precio,0);
// console.log(nPrecio)
templateFooter.querySelectorAll('td')[0].textContent=nCantidad
templateFooter.querySelector('span').textContent=nPrecio
const clone=templateFooter.cloneNode(true)
fragment.appendChild(clone);
footer.appendChild(fragment);

const botonComprar=document.querySelector('#buttonForm');//Agregue boton Comprar
botonComprar.addEventListener('click',()=>{
    carrito={}//Posible solucion, sacar carrito={} & pintarCarrito(); de este bloque, activacion con otro evento
    pintarCarrito();
	//alert('funciono el boton compra');
	document.getElementById('formaMP').style.display='block';document.getElementsByTagName('body')[0].style.overflow='hidden';
    formMP.getElementById('form-checkout__amountTocha').dataset.amount=nPrecio;
    
});
const closeForm=document.querySelector('#closeMP');
closeForm.onclick=()=>{document.getElementById('formaMP').style.display='none';document.getElementsByTagName('body')[0].style.overflow = 'visible';}
}//End of Buy Process; Buy Button

const btnAumentarDisminuir=e=>{
    // console.log(e.target.classList.contains('btn-info'))
    if(e.target.classList.contains('btn-info')){
        const producto=carrito[e.target.dataset.id];
        producto.cantidad++;
		carrito[e.target.dataset.id]={...producto}
        pintarCarrito();
    }
    if(e.target.classList.contains('btn-danger')){
        const producto=carrito[e.target.dataset.id];
        producto.cantidad--;
        if(producto.cantidad===0){
            delete carrito[e.target.dataset.id];
        }else{carrito[e.target.dataset.id]={...producto}}
        pintarCarrito();
    }
    e.stopPropagation();
}
document.addEventListener('DOMContentLoaded',e=>{
    fetchData();
    if(localStorage.getItem('carrito')){
        carrito=JSON.parse(localStorage.getItem('carrito'));
        pintarCarrito();
    }
});
*/
>>>>>>> 57f16565d94fc5722f6b7949232ee9399a0c284f

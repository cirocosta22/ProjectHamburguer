import { menuOptions } from "./products.js"

const buttonShow = document.getElementById('showAll')
const buttonDesconto = document.getElementById('desconto')
const buttonSumAll = document.querySelector('.sum-all')
const lista = document.getElementById('listaHamburguer')
const showVegan = document.querySelector('.filterVegan')
const searchButton = document.querySelector('.search')

function mostrarItens(productsArray){ 
   let li = ''
  
   
    
   
     productsArray.forEach(item => { 
        li += `<li class="firstli">
        <img src="${item.src}" alt="">
        <p>${item.name}</p>
        <p class="item-price">${formatarValor(item.price)}</p>
    </li>`
    lista.innerHTML = li
     })
}


function formatarValor(value){
   return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    
}



function giveDesconto(){ 

   const newPrices =  menuOptions.map((item )=> ({
          ...item, 
          price:item.price * 0.9
   }))

   mostrarItens(newPrices)
     
}

function sumall(){ 
   
     const totalValue = menuOptions.reduce((acc,curr) => acc + curr.price,0)
     let liValorTotal = `<li> valor total dos produtos:R$ ${totalValue}</li>`
     lista.innerHTML = liValorTotal
     
     
}

function showProductsVegan(){ 
    const filtrar = menuOptions.filter((product) => product.vegan)
    mostrarItens(filtrar)
    console.log(filtrar)
}

function filterOrder(){ 
   const inputSearch = document.getElementById('inputSearch').value
   
}


searchButton.addEventListener('click',filterOrder)
showVegan.addEventListener('click',showProductsVegan)
buttonDesconto.addEventListener('click',giveDesconto)
buttonShow.addEventListener('click',() =>  mostrarItens(menuOptions))
buttonSumAll.addEventListener('click',sumall)
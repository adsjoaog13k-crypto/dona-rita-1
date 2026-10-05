const products = [
  {id:1,name:"Pão de fermentação natural",desc:"Casca crocante e miolo macio, feito artesanalmente.",price:18.90,icon:"🍞"},
  {id:2,name:"Cesta Café da Manhã",desc:"Pães, bolo e acompanhamentos para começar bem o dia.",price:49.90,icon:"🧺"},
  {id:3,name:"Bolo caseiro",desc:"Receita artesanal para compartilhar em qualquer ocasião.",price:34.90,icon:"🍰"},
  {id:4,name:"Tábua de frios",desc:"Seleção de queijos, frios e acompanhamentos para eventos.",price:79.90,icon:"🧀"}
];

let cart = JSON.parse(localStorage.getItem("donaClaraCart") || "[]");

const money = value => value.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

function renderProducts(){
  document.querySelector("#product-grid").innerHTML = products.map(p => `
    <article class="product">
      <div class="product-image">${p.icon}</div>
      <div class="product-info">
        <h3>${p.name}</h3><p>${p.desc}</p>
        <div class="product-bottom"><span class="price">${money(p.price)}</span>
        <button class="add" data-id="${p.id}" aria-label="Adicionar ${p.name}">+</button></div>
      </div>
    </article>`).join("");
  document.querySelectorAll(".add").forEach(btn => btn.addEventListener("click",()=>addToCart(+btn.dataset.id)));
}
function addToCart(id){
  const item = cart.find(x=>x.id===id);
  if(item) item.qty++; else cart.push({id,qty:1});
  saveCart(); renderCart(); toast("Item adicionado ao seu pedido.");
}
function saveCart(){localStorage.setItem("donaClaraCart",JSON.stringify(cart));}
function renderCart(){
  const items = document.querySelector("#cart-items");
  const count = cart.reduce((sum,x)=>sum+x.qty,0);
  const total = cart.reduce((sum,x)=>{const p=products.find(p=>p.id===x.id);return sum+p.price*x.qty},0);
  document.querySelector("#cart-count").textContent = `${count} ${count===1?"item":"itens"}`;
  document.querySelector("#cart-total").textContent = money(total);
  items.innerHTML = count ? cart.map(x=>{const p=products.find(p=>p.id===x.id);return `<div class="cart-row"><span>${p.name}<br><small>Quantidade: ${x.qty}</small></span><strong>${money(p.price*x.qty)}</strong></div>`}).join("") : '<p class="empty">Seu carrinho está vazio.</p>';
}
function toast(message){
  const el=document.querySelector("#toast"); el.textContent=message; el.classList.add("show");
  setTimeout(()=>el.classList.remove("show"),2600);
}
const dialog=document.querySelector("#order-dialog");
document.querySelector("#open-order").addEventListener("click",()=>dialog.showModal());
document.querySelector("#checkout").addEventListener("click",()=>{
  if(!cart.length){toast("Adicione pelo menos um item ao pedido."); return;}
  dialog.showModal();
});
document.querySelector("#close-dialog").addEventListener("click",()=>dialog.close());
document.querySelector("#order-form").addEventListener("submit",(e)=>{
  e.preventDefault();
  const name=document.querySelector("#customer-name").value.trim();
  const date=document.querySelector("#pickup-date").value;
  const time=document.querySelector("#pickup-time").value;
  const total=cart.reduce((s,x)=>s+products.find(p=>p.id===x.id).price*x.qty,0);
  localStorage.setItem("donaClaraLastOrder",JSON.stringify({name,date,time,total,items:cart}));
  cart=[]; saveCart(); renderCart(); dialog.close(); e.target.reset();
  toast(`Pedido de ${name} registrado com sucesso!`);
});
const dateInput=document.querySelector("#pickup-date");
dateInput.min=new Date().toISOString().split("T")[0];
renderProducts(); renderCart();

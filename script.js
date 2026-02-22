let products = [];

// عرض المنتجات
function displayProducts() {
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className='product-card';
    card.innerHTML=`
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p><strong>${p.price}</strong></p>
    `;
    container.appendChild(card);
  });
}

// تحميل المنتجات من store.json
fetch('store.json').then(res=>res.json()).then(data=>{products=data; displayProducts();});

// إضافة منتج جديد من لوحة التحكم
document.getElementById('addProduct').addEventListener('click',()=>{
  const name=document.getElementById('pname').value;
  const image=document.getElementById('pimage').value;
  const desc=document.getElementById('pdesc').value;
  const price=document.getElementById('pprice').value;
  if(name && image && desc && price){
    products.push({name,image,description:desc,price});
    displayProducts();
    document.getElementById('pname').value='';
    document.getElementById('pimage').value='';
    document.getElementById('pdesc').value='';
    document.getElementById('pprice').value='';
  }
});

// تأثير Alien عند الدخول
window.addEventListener('load',()=>{
  setTimeout(()=>{
    const overlay=document.getElementById('alienOverlay');
    overlay.style.opacity='0';
    setTimeout(()=>overlay.style.display='none',1500);
  },3000);
});

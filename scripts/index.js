let bagItems = []
onLoad();


function onLoad() {
  let bagItemsStr =localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemsOnHomePage();
displayBagIcon();
}

function addToBag(itemId) {
bagItems.push(itemId);
localStorage.setItem('bagItems', JSON.stringify(bagItems));
displayBagIcon();
}

function displayBagIcon() {
  let bagItemsCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length >0) {
    bagItemsCountElement.style.visibility  = 'visible';
    bagItemsCountElement.innerText  = bagItems.length;
  } else {
    bagItemsCountElement.style.visibility  = 'hidden';
  }

}


function displayItemsOnHomePage( ){
  let itemsContainerElement = document.querySelector('.items-container');

  if (!itemsContainerElement) {
    return;
  }

let innerHTML = '';
items.forEach(item => {
  innerHTML += `<div class="item-container">
 <img  class="item-image " src="${item.image}" alt="item images">
  <div class="rating">
   ${item.rating.stars}
   ⭐ | ${item.rating.count}   </div>
<div class="company-name">${item.name}
 </div>
 <div class="item-name"> ${item.item_name} </div>
<div class="price">
<span class = "current -price">Rs ${item.current_price}</span>
 <span class = "original-price ">Rs ${item.original_price}</span>
 <span class = "discount">${item.discount_percentage}%OFF</span>
  </div>
     <button class="add-bag" onclick = "addToBag(${item.id})">Add to Bag</button>
</div>`
});
itemsContainerElement.innerHTML = innerHTML;
}               








/*individual Items */
/*let item = {
  item_image:  '/myntra imagesss/1.jpg',
  rating: {
    stars: 4.5,
    noOfViews: 1400,
  },
  company_name: 'Carlton London',
  item_name: 'Rhodium-Plated CZ Floral',
  current_price: 606,
  original_price: 1045,
  discount_percentage: 42,
}*/
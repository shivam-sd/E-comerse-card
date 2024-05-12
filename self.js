let AllInfo = [
    {Name : "Luxiry Chair" , Brand : "Topa" , Price : "1599" , Image : "https://media.istockphoto.com/id/827667328/photo/stylish-chair-with-white-top-and-light-wooden-legs-standing-on-white.jpg?s=1024x1024&w=is&k=20&c=ziUh0LHeh_vOfWONBtbp58llJTtD4PL0I3gdAwKJcCg="},
    {Name : "Black chair" , Brand : "No 1" , Price : "7999" , Image : "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXxlbnwwfHwwfHx8MA%3D%3D"},
    {Name : "Laptop" , Brand : "Dell" , Price : "2999" , Image : "https://media.istockphoto.com/id/1326217588/photo/shot-of-a-young-women-using-laptop-for-studying-at-home-stock-photo.jpg?s=1024x1024&w=is&k=20&c=2iQGi3Ns2MA_VW8GuGhDFZSrVC4oh9Y8A486kbloExg="},
    {Name : "Realme 8" , Brand : "Realme" , Price : "16999" , Image : "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"},
    {Name : "Books" , Brand : "Arihant" , Price : "299" , Image : "https://media.istockphoto.com/id/157482029/photo/stack-of-books.webp?b=1&s=170667a&w=0&k=20&c=pNbP11aM5NeRs9NgpmpsNbBhIYmH6xUti3Hij6qR040="},
    {Name : "Modern cycal " , Brand : "Hero" , Price : "10999" , Image : "https://images.unsplash.com/photo-1570865116909-d358c47f1806?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {Name : "Luxiry Chair" , Brand : "Topa" , Price : "1599" , Image : "https://media.istockphoto.com/id/827667328/photo/stylish-chair-with-white-top-and-light-wooden-legs-standing-on-white.jpg?s=1024x1024&w=is&k=20&c=ziUh0LHeh_vOfWONBtbp58llJTtD4PL0I3gdAwKJcCg="},
    {Name : "Black chair" , Brand : "No 1" , Price : "7999" , Image : "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXxlbnwwfHwwfHx8MA%3D%3D"},
    {Name : "Laptop" , Brand : "Dell" , Price : "2999" , Image : "https://media.istockphoto.com/id/1326217588/photo/shot-of-a-young-women-using-laptop-for-studying-at-home-stock-photo.jpg?s=1024x1024&w=is&k=20&c=2iQGi3Ns2MA_VW8GuGhDFZSrVC4oh9Y8A486kbloExg="},
    {Name : "Realme 8" , Brand : "Realme" , Price : "16999" , Image : "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"},
    {Name : "Books" , Brand : "Arihant" , Price : "299" , Image : "https://media.istockphoto.com/id/157482029/photo/stack-of-books.webp?b=1&s=170667a&w=0&k=20&c=pNbP11aM5NeRs9NgpmpsNbBhIYmH6xUti3Hij6qR040="},
    {Name : "Modern cycal " , Brand : "Hero" , Price : "10999" , Image : "https://images.unsplash.com/photo-1570865116909-d358c47f1806?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];

let cart = [];

function showTheCard(){
    var clutter = "";
    AllInfo.forEach((product , index) => {
       
        clutter += `<div class="product">

        <div class="img">
        <img src="${product.Image}" id="set">
        </div>

        <div class="data">

            <h3>${product.Brand}</h3>
            <div class="data1">
                <div class="samll-data">
                <h5>${product.Name}</h5>
                <h5>${product.Price}</h5>
                </div>
                <button data-index="${index}" class="add">+</button>
            </div>

        </div>
    </div>`
    })

    document.querySelector(".products").innerHTML = clutter;
}

function addCart(){
    document.querySelector(".products").addEventListener("click",(details) => {
        if(details.target.classList.contains("add")){
           cart.push(AllInfo[details.target.dataset.index]);
        }
    })
}

function showitem(){
    document.querySelector("#menu").addEventListener("click",() => {
        document.querySelector("#item-store").style.display = 'block';

        var clutter = '';

    cart.forEach((prod) => {
        clutter += `  <div class="cart-item">
                    
        <div class="store-img">
            <img src="${prod.Image}" alt="" id="card-img" width="" height="40px">
        </div>
        <h4 class="name" style="color: black; font-size: 20px; margin-left: 8px;">${prod.Name}</h4>
        <div class="details-cart">
            
            <h4 class="brand">${prod.Brand}</h4>
            <h4 class="price">${prod.Price}</h4>
            
        </div>
    </div> 
    
</div> `
    })
    document.querySelector("#item-store").innerHTML = clutter;
    });
    
};


showitem();
addCart();
showTheCard();
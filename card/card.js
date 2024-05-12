var products = [
    { name : "Bkack Chair" , image : "https://media.istockphoto.com/id/827667328/photo/stylish-chair-with-white-top-and-light-wooden-legs-standing-on-white.jpg?s=1024x1024&w=is&k=20&c=ziUh0LHeh_vOfWONBtbp58llJTtD4PL0I3gdAwKJcCg=" , price : 5990},

    { name : "White Chair" , image : "https://media.istockphoto.com/id/1285657208/photo/black-throne-chair-isolated.jpg?s=1024x1024&w=is&k=20&c=DaxgC-kowji95ee0pTEiZJeabuGYF65-y1m75ZvMk9k=" , price : 7700},

   { name: "laptop" , image : "https://media.istockphoto.com/id/1326217588/photo/shot-of-a-young-women-using-laptop-for-studying-at-home-stock-photo.jpg?s=1024x1024&w=is&k=20&c=2iQGi3Ns2MA_VW8GuGhDFZSrVC4oh9Y8A486kbloExg=" , price : 29300},
];


var popular = [];


function addshowcard(){
    var clutter = "";
    products.forEach((product) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"></div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">EJ 100 Ox Chair.</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">Hangup data.</h3>
                <h4 class="font-semibold mt-2">$3,456</h4>
            </div>
            <button class="w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i
                    class="ri-add-line"></i></button>
        </div>
    </div>
</div>`;
})
document.getElementById(".products").innerHTML = clutter;
}


addshowcard();


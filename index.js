const reviews = [
    {
        no: 0,
        img:"https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg",
        name: "APJ Abdul Kalam",
        job: "Indian aerospace scientist",
        quote: "If you fail, never give up because FAIL means "+"'First Attempt In Learning'."
    },

    {
        no: 1,
        img:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg",
        name: "Elon Musk",
        job: "Former CEO of Microsoft",
        quote: "I think it is possible: " + "For ordinary people to choose to be extraordinary."
    },
    {
        no: 2,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqjL0I5qM2nplmc1t5v4MNXMSQgvQkMH9BmfiidnMEGzHXkovLVO7KkwgpYGHaVejj6k&usqp=CAU",
        name: "Bill Gates",
        job: "CEO of Microsoft",
        quote: "“It's fine to celebrate success, but it is more important to heed the lessons of failure.” ",
    },
    {
        no: 3,
        img:"https://images.mubicdn.net/images/cast_member/1126/cache-89325-1604950072/image-w856.jpg",
        name: "Christopher Nolan",
        job: "British and American filmmaker",
        quote: "Every film should have its own world, a logic and feel to it that expands beyond the exact image that the audience is seeing.",
    }
];


const image=document.querySelector(".image");
const Name=document.querySelector(".name");
const proffession=document.querySelector(".proffession");
const quote=document.querySelector(".quote-text");
const prevBtn=document.querySelector(".prev-btn");
const nxtBtn=document.querySelector(".nxt-btn");
const randomBtn=document.querySelector(".random-button");


let itemNumber= 0;


window.addEventListener("DOMContentLoaded",() =>{
    addingDetails();
})

function addingDetails(){
    let item = reviews[itemNumber];
    image.src=item.img;
    Name.textContent= item.name;
    proffession.textContent=item.job;
    quote.textContent=item.quote;
}

nxtBtn.addEventListener('click', function(){
    itemNumber++;
    if(itemNumber>reviews.length){
        itemNumber=0;
    }
    addingDetails()
})

prevBtn.addEventListener('click',() =>{
    itemNumber--;
    if(itemNumber<0){
        itemNumber=reviews.length-1;
    }
    addingDetails();
})

randomBtn.addEventListener('click',() =>{
    itemNumber=Math.floor(Math.random()*reviews.length)
    addingDetails()
})

function viewMore(dogId){
   
    const dogDetails={
        pet1:{
            image:"pet1.jpeg",
            name:"Pet 1",
            breed:"Labrador",
            age:"2 years",
            description:"Meet,our lovable and energrtic Labrador!He ia a 2-year-old bundle of joy who loves playing fetch,going on long walks,and snugllingup on the couch.He's great with kids and other dogs,making him the perfect addition to an active family.He is house trained,knows basic commands,and is always eager to learn new tricks.If you're looking for a loyal companion to join your family adventures.He is the dog for you!!!"
        },
        pet2:{
            image:"pet02.jpg",
            name:"Pet 2",
            breed:"American Bully",
            age:"4 years",
            description:"Meet our gentle and affectionate American Bully!She is a 4-years-old sweetheart who loves belly rubs and lounging around the house.She is great with children and enjoys short walks and lots of cuddles.She is house trained and knows basic commands.If you're looking for a calm and loving companion,She is the dog for you!!!"
        },
        pet3:{
            image:"Pet03.jpg",
            name:"Pet 3",
            breed:"Chow Chow",
            age:"2 years",
            description:"Meet our independent and loyal Chow Chow!He is a 2-year-old dog who enjoys his own space but is also affectionate with his family.He is great with older children and enjoys long walks.He is house trained and knows how basic commands.If you're looking for a unique and independent companion,he is the dog for you!!!"
        }
    };
    localStorage.setItem('dogDetails',JSON.stringify(dogDetails[dogId]));
    window.location.href='dog-Details.html';
}
// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("Search-Bar").addEventListener("input",searchDogs);
// });
// function searchDogs(){
//     const searchInput=document.getElementById("search-Bar").value.lowercase();
//     const dogs=document.querySelectorAll(".dog-types");

// dogs.forEach(dog=>{
//     const breed=dog.getAttribute("data-breed").toLowerCase();
//     if(breed.includes(searchInput)){
//         dog.style.display="block";
//     }
//     else{
//         dog.style.display="none";
//     }
// });
// }
function adopt(){
    window.location.href='adoption-confirm.html';
}    
function goToContactPage(){
    window.location.href='contact.html';
}
function submitContact(event){
    event.preventDefault();
   const name =document.getElementById('name').value;
   const email =document.getElementById('email').value;
   const message =document.getElementById('message').value;
   alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
   

   document.getElementById('contactform').reset();

   window.location.href='aboutus.html';
}
function returnToHome(){
    window.location.href='index.html';
}
document.addEventListener('DOMContentLoaded',()=>{
    const dogDetails=JSON.parse(localStorage.getItem('dogDetails'));
    if(dogDetails){
        document.getElementById('dogImage').src=dogDetails.image;
        document.getElementById('dogName').innerText=dogDetails.name;
        document.getElementById('dogBreed').innerText=dogDetails.breed;
        document.getElementById('dogAge').innerText=dogDetails.age;
        document.getElementById('dogDescription').innerText=dogDetails.description;
    }
});

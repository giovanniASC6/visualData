// const first = list[0];
const main= document.querySelector(`main`)


const createCard = (obj, indx)=>{
    const newCard= document.createElement("div")
    newCard.className= "card"
    newCard.id= indx;

    const face = document.createElement("img");
    face.src= obj.picture.medium
    face.alt= "Portrait";


 newCard.appendChild(face)
main.appendChild(newCard);

};

// createCard(first);

const loopCreate= array=>{
    for(let i=0; i<array.length; i++){
        createCard(array[i], i) }
    
}

loopCreate(list)
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }

    return gifts;
}

wrapGifts(gifts);*/

const arr1 =[];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        
        arr1.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
       
    }
    
    return arr1;
}
/*function countDown (number) {
    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
}*/

function countDown (number) {
    let i = 0;
    while (i <= number) {
        console.log(i);
        i++;
    }
}


const name = ["Guadalupe","Ollie","Aki"];
function writeCards(name,gift = "surprise"){
    let array = [];
    for (let i = 0; i < name.length; i++){
        array.push (`Thank you, ${name[i]}, for the wonderful ${gift} gift!`);
    }
    return array;
}
let num = [0,1,2,3,4,5,6,7,8,9,10]
const countDown = (num) => {
    while(num >= 0){
        console.log(num);
        num--;
    }
}
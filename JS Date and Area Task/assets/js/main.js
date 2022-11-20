//First Task
//1st way:
// function calcArea(r){
//     return Math.PI*Math.pow(r,2);
// }
// console.log(calcArea(10));
//2nd way:
// var r=5;
// var area=Math.PI*Math.pow(r,2)
// console.log(area);

//Second Task
var time=new Date().getHours();
console.log(time);
if (time>=6&&time<12) {
    document.body.style.backgroundImage=  "url('https://images.pexels.com/photos/69224/pexels-photo-69224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    document.body.style.backgroundSize="cover";       
    document.querySelector('h1').innerText="Good Morning!"
    alert('Good Morning!');
}
else if (time>=12&&time<18) {
    document.body.style.backgroundImage=  "url('https://images.pexels.com/photos/955656/pexels-photo-955656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    document.body.style.backgroundSize="cover";
    document.querySelector('h1').innerText="Good Afternoon!"
    alert('Good Afternoon!');
}
else if (time>=18&&time<24) {
    document.body.style.backgroundImage= "url('https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    document.body.style.backgroundSize="cover";
    document.querySelector('h1').innerText="Good Evening!"
    document.querySelector('h1').style.color="white"
    alert('Good Evening!');
}
else{
    document.body.style.backgroundImage= "url('https://images.pexels.com/photos/746111/pexels-photo-746111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    document.body.style.backgroundSize="cover";
    document.querySelector('h1').innerText="Midnight!"
    document.querySelector('h1').style.color="white"
    alert('Midnight!');
}
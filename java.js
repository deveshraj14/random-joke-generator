const generatejoke = () => {
    const setHeader={
        Headers:{
            Accept:"application/json"
        }
    }
    fetch('https://icanhazdadjoke.com',setHeader)
    .then((res)=>res.json())
    .then((data)=>{joke1.innerHTML=data.joke})
    .catch((error)=>{console.log(error)})
}


const joke1=document.getElementsByClassName('.joke');
const jokebtn=document.getElementsByClassName('.btn');
jokebtn.addEventListener('click',generatejoke);
generatejoke();
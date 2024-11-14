const element = document.getElementById("btnMama")
// const element2 = document.getElementById("btnPapa")
element.addEventListener(`click`, function () {
    document.getElementById('message').innerText = "Hello Mama!"
})


const element2 = document.getElementById("btnPapa")
element2.addEventListener(`click`, function () {
    document.getElementById('message').innerText = "Hello Papa!"
})



// const btn = document.getElementById("btnReverse")
// btn.addEventListener(`click`, function () 
// {
//     let text = document.getElementById("input").value;   
//     if (text !="")
//     {
//         document.getElementById("message2").innerHTML += text;

//     }
// })

function reverseString()
{
    let text = document.getElementById("input").value;   
    if (text !="")
    {
        document.getElementById("message2").innerHTML = text;

    }
}



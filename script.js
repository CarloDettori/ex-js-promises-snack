
/* 
function getPostTitle(id) {
    console.log("loading1")
    const promise = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((resolve) => resolve.json())
            .then((data) => resolve(data))
            .catch(reject)
            .finally(console.log("end 1"));
    })
    console.log(promise)
    return promise
}

getPostTitle(1)



function getPost(id) {

    fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then((post) => {
            let content = post
            return fetch(`https://dummyjson.com/users/${post.userId}`)
                .then(response => response.json())
                .then(autor => { content.autor = autor; console.log(content) })
        })
        .catch((error) => console.error(error))

}
getPost(1)
*/





function lanciaDado() {

    return new Promise((resolve, reject) => {
        console.log("il dado è tratto")
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            const randomCrash = Math.floor(Math.random() * 5) + 1;
            if (randomCrash === 1) {
                reject("il dado è crashato")
            } else {
                resolve(randomNumber)

            }
        }, 3000)
    })

}

function CreaLanciaDadox() {
    //let vecchioNumero
    //tiro()
    //   function tiro() {
    return new Promise((resolve, reject) => {
        console.log("il dado è tratto")
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            const randomCrash = Math.floor(Math.random() * 5) + 1;
            if (randomCrash === 1) {
                reject("il dado è crashato")
            } else {
                resolve(randomNumber)

            }
        }, 1)
        /*
        return (
            (randomNumber) => {
                if (numeroUscito == vecchioNumero) {
                    console.log("Incredibile!")
                } else {
                    vecchioNumero = numeroUscito
                }
            }
        )
        */
    })
    //   }
}

//CreaLanciaDadox().then((number) => { console.log("il dado segna " + number) }).catch(message => console.error(message))

function CreaLanciaDado() {
    let lastStrike = null
    return function () {
        lanciaDado()
            .then((number) => {
                console.log("il dado segna " + number);
                if (number === lastStrike) {
                    console.log("Incredibile!")
                } else {
                    lastStrike = number
                }
                lastStrike = number
            })
            .catch(message => console.error(message), lastStrike = null)
    }
}




function Tiri(tiri) {
    const tira = CreaLanciaDado()
    let timer = tiri * 1000
    const reroll = setInterval(() => { tira() }, 1000)
    setTimeout(() => { clearInterval(reroll) }, timer)
}



Tiri(5)
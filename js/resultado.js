function verificar(){
    var f = window.document.querySelector('#fun') 
    var fun = String(f.value)
    var res = document.querySelector('#res')
    var img = document.createElement('img')
    var nome = ''
    img.setAttribute('id', 'foto')  
        nome = '#Ituber'
        if(fun == 0) {
            alert('[ERROR] Verifique os dados e tente novamente')
        }if (fun == "987281186") {  //Wellington Bertoso santos
        img.setAttribute('src', 'img/987281186-2.jpg')
        // document.body.style.background = "#d5d9da"
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundRepeat = "no-repeat"
        res.style.textAlign = 'center'
        res.innerHTML = `<strong> Olá ${nome}<i class="icon uil uil-selfie"></i></strong>`
        res.appendChild(img)
       } else if (fun == "004091062") { //Vanessa Machuca
        nome = '#Ituber'
        img.setAttribute('src', 'base-01-04/vanessa/004091062-1.jpg')
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundRepeat = "no-repeat"
        res.style.textAlign = 'center'
        res.innerHTML = `<strong> Olá ${nome}<i class="icon uil uil-selfie"></i></strong>`
        res.appendChild(img)
    } else if  (fun == "987341878") { //Antonio Nicolau
        nome = '#Ituber'
        img.setAttribute('src', 'base-01-04/antonio/987341878-3.jpg')
        //document.body.style.background = "#d5d9da"
        res.style.textAlign = 'center'
        res.innerHTML = `<strong> Olá ${nome}<i class="icon uil uil-selfie"></i></strong>`
        res.appendChild(img)
    } else if (fun == "987392812") { //Raissa
        nome = '#Ituber' //
        img.setAttribute('src', 'base-01-04/raissa/987392812-4.jpg')
        //document.body.style.background = "#d5d9da"
        res.style.textAlign = 'center'
        res.innerHTML = `<strong> Olá ${nome}<i class="icon uil uil-selfie"></i></strong>`
        res.appendChild(img)
    }else if (fun == "004038759") { //teste
        nome = '#Ituber' //
        img.setAttribute('src', '')
        //document.body.style.background = "#d5d9da"
        res.style.textAlign = 'center'
        res.innerHTML = `<strong> Olá ${nome}<i class="icon uil uil-selfie"></i>Seu pedido ainda não foi processado</strong>`
        res.appendChild(img)
    }
}




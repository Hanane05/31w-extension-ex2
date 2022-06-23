(function(){
    let elmBoite__modale;
    let elmBoite__X;
    let elmBoite__contenu;
    function creer_boite_modale() {
        elmBoite__modale = document.createElement('div')
        elmBoite__contenu = document.createElement('div')
        elmBoite__contenu.classList.add('elmBoite__contenu')
        elmBoite__X = document.createElement('button')
        elmBoite__modale.appendChild(elmBoite__contenu)
        elmBoite__modale.appendChild(elmBoite__X)
        elmBoite__X.classList.add('boite__X')
        elmBoite__X.innerHTML = 'X'
        elmBoite__modale.classList.add('boite__modale')
        elmBody = document.querySelector('body')

        elmBody.appendChild(elmBoite__modale);
        let text = document.querySelector(".code__adresse").innerText
        elmBoite__contenu.innerHTML = text;
    }

    creer_boite_modale();
    


    // document.querySelector('.boite__modale')
    let elmOK = document.querySelector('#mon_bouton');
    
    elmOK.addEventListener('mousedown',  function(){
        elmBoite__modale.classList.add('boite__modale__ouvrir');
        console.log(elmBoite__modale.classList);
    })


    elmBoite__X.addEventListener('mousedown', function(){
        elmBoite__modale.classList.remove('boite__modale__ouvrir')
    })
})()

let restArr = ['Cafe Oasis', 'Tempura Yoshimura', 'Noboru']

let restRec = document.getElementById('restRec-btn')

restRec.addEventListener('click', () => {
   const randomRec = restArr[Math.floor(Math.random() * restArr.length)]
   alert(`You should visit ${randomRec}!`)
})
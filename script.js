const hangok = ['bárány', 'boci', 'cica', 'kakas', 'kecske', 'ló', 'malac']

hangok.forEach(hang => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = hang

    btn.addEventListener('click', () => {
        stopHangok()

        document.getElementById(hang).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopHangok(){
    hangok.forEach(hang => {
        const dal = document.getElementById(hang)

        dal.pause()
        dal.currentTime = 0;
    })
}
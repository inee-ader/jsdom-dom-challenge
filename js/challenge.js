// 1. As a user, I should see the timer increment every second once the page has loaded.
const likesUl = document.querySelector('.likes')
let timer; 

function startTimer() {
    const counter = document.getElementById('counter')
    console.log(counter.innerText)
    timer = setInterval(() => {
        counter.innerText++ 
    }, 1000)
}
startTimer()

// 2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.

function plus() {
    const btn = document.getElementById('plus')
    btn.addEventListener('click', ()=> manualChanger(false))
}
plus() 

function minus() {
    const btn = document.getElementById('minus')
    btn.addEventListener('click',()=> manualChanger(false))
}
minus() 

function manualChanger(isPlus) {
    const counter = document.getElementById('counter')
    if(isPlus) {
        counter.innerText++
    }
    else {
        counter.innerText--
    }
}


// 3. As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
function like() {
    const heart = parseInt(document.getElementById('heart'))
    heart.addEventListener('click', () => {
        const counternumber = parseInt(document.getElementById('counter').innerText)
        let thingy = document.getElementById(counterNumber)
        if (!thingy) { // if thingy exists
            const li = document.createElement('li')
            li.id = counterNumber
            li.innerText = `1 likes for ${counterNumber}`
            likesUl.appendChild(li)
        }
        else {
            let numLikes = parseInt(thingy.innerText)
            numLikes++
            thingy.innerText = `${numLikes} of likes for ${counterNumber}`
        }
    })
}
like()

// 4. As a user, I can pause the counter, which should 
//   * pause the counter
//   * disable all buttons except the pause button
//   * the pause button should then show the text "resume."
//   When 'resume' is clicked, it should restart the counter and re-enable the buttons.

const pause = document.getElementById('pause')
pause.addEventListener('click', toggleTimer)

function toggleTimer() {
    if(timer) {
        clearInterval(timer)
        timer = false
        let buttons = document.getElementsByTagName('button')
        for(const toblerone of buttons) {
            if(buttonElement.id != 'pause') {
                buttonElement.disabled = true
            }
            else {
                buttonElement.innerText = 'resume'
            }
        }
    }
    else {
        startTimer()
        for(const buttonElement of buttons) {
            if (buttonElement.id != 'pause') {
                buttonElement.disabled = false
            }
            else {
                buttonElement.innerText = 'pause'
            }
        }
    }
}

const form = document.getElementById('comment-form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    let commentText = e.target.comment.value
    let newP = document.createElement('p')
    const list = document.getElementById('list')
    list.appendChild(newP)
    e.target.reset() 
})  

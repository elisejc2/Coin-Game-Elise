function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
    const isTouching = !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);

	return isTouching;
}

const avatar = document.querySelector('#player')
const coin = document.querySelector('#coin')
const newEl = document.querySelector('#newEl')


window.addEventListener('keyup', function(e) {
    if(e.key === 'ArrowDown') {
        const currTop = extractPos(avatar.style.top);
        avatar.style.top = `${currTop + 50}px`
    } 
    else if (e.key === 'ArrowUp') {
        const currTop = extractPos(avatar.style.top);
        avatar.style.top = `${currTop - 50}px`
    } 
    else if (e.key === 'ArrowRight') {
        const currLeft = extractPos(avatar.style.left);
        avatar.style.left = `${currLeft + 50}px`
        avatar.style.transform = 'scale(1,1)'
    } 
    else if (e.key === 'ArrowLeft') {
        const currLeft = extractPos(avatar.style.left);
        avatar.style.left = `${currLeft - 50}px`
        avatar.style.transform = 'scale(-1,1)'
    }
    if (isTouching(avatar, coin)) {
        moveCoin();
    }
})



const extractPos = (pos) => {
    if(!pos) return 100;
   return parseInt(pos.slice(0, -2))
}

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth); 
    const y = Math.floor(Math.random() * window.innerHeight); 

    coin.style.top = `${y}px`
    coin.style.left = `${x}px`
}


// if you ware to rewrite some of this code you could create an object to hold functions for the Arrow key 

// const moveVertical = (element, amount) => {
    // const currTop = extractPos(element.style.top);
    // element.style.stoop = `${currTop { amount}px}
// };


// const moveHorizontal = (element, amount) => {
    // const currLeft = extractPos(element.style.left);
    // element.style.left = `${currLeft + amount}px
// }

// Left:  moveHorizontal(avatar, -50)
// Right:  moveHorizontal(avatar, 50)
// Up:  moveVertical(avatar, -50)
// Down:  moveVertical(avatar, 50)

// other features you coould add: more coins, different colors, sizes and values, score keeper, coins move

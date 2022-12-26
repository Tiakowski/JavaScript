const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

console.log(controls)
console.log(currentItem)
console.log(items)

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');
        console.log('control clicked', isLeft, currentItem, maxItems);

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }
        if(currentItem < 0) {
            currentItem = maxItems - 1
        }

        items.forEach(items =>
            items.classList.remove('current-item'));
        
        items[currentItem].scrollIntoView({
            inline:"center",
            behavior:"smooth"
        });

        items[currentItem].classList.add("current-item");
    });
});
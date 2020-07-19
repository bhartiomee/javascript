console.log('This is code.js of drag and drop');

let whiteBoxes = document.getElementsByClassName('whiteBox')
let imgBox = document.querySelector('.imgBox')


//event listener for draggable elements
imgBox.addEventListener('dragstart', (e) => {
    console.log('Dragstart has been triggerd');

    e.target.className += ' hold'
    setTimeout(() => {
        e.target.className += ' hide'
    }, 0);


})

imgBox.addEventListener('dragend', (e) => {
    console.log('Drag end has been triggerd');
    e.target.className = 'imgBox'



})

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        console.log('Dragsover has been triggerd');
        e.preventDefault();
    })

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('Dragenter has been triggerd');
        e.target.className += ' dashed'
       
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('Dragleave has been triggerd');
        e.target.className = 'whiteBox'
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggerd');
        e.target.append(imgBox);
        setTimeout(() => {
            e.target.classList.add('removeDashed');
        }, 2000);
    })
}

window.onload = function () {
    document.body.addEventListener('click', (e) => {
        const element = e.target;
        if (element.className === 'text') {
            const popElement = element.children[0]
            if (popElement.style.visibility === 'visible') {
                popElement.style.visibility = 'hidden'
            } else {
                popElement.style.visibility = 'visible'
            }
        }
    })
}
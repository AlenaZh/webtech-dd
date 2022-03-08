const anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const sectionId = anchor.getAttribute('href').substring(1);
        console.log(sectionId);

        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
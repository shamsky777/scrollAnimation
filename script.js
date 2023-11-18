const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)
        // თუ გინდა რომ ყოველი ასქროლვა ჩამოსქროლვის დროს ანიმაცია იყოს წაშალე ქვევით If-ი თუარადა არ წაშალო ;)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: 0.7,
    }
)

cards.forEach(card => {
    observer.observe(card)
})
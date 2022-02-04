/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1000,
    reset: true
});

sr.reveal(' .header__text, .line, .article_title, .articles h4, .article_subtitle, .about__title, .about__subtitle, .subscribe_subtitle',  
{
    interval: 200
})
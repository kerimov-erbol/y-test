const theme_toggler = document.querySelector('.header__theme-toggle');
const logoImg = document.querySelector('.header__theme-toggle-img');
const heroScreen = document.querySelector('.hero__screenshot-img');

theme_toggler.addEventListener('click', function(){ 
    document.body.classList.toggle('dark_mode')
    if(document.body.classList.contains('dark_mode')){
        logoImg.src="img/theme/mode-dark.svg"
    }else{
        logoImg.src="img/theme/mode-light.svg"
    }
    
});


const coinObserver =new IntersectionObserver((entites)=>{
    entites.forEach((entity,index)=>{
        if(entity.isIntersecting){
            setTimeout(()=>{
                entity.target.classList.add('animate')
            },(index+1) * 500)
        }else{
            entity.target.classList.remove('animate')
        }
    })
})


const coins=document.querySelectorAll(".currencies__img")
console.log("1")
console.log(coins)
coins.forEach(element => {
    console.log("2")
    console.log(element)
    coinObserver.observe(element)
});



const cursorObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector(".commission__btn").classList.add('animate-button')
            entry.target.classList.add("animate-coursor"); // Add class when intersecting
        } else {
            document.querySelector(".commission__btn").classList.remove('animate-button')
            entry.target.classList.remove("animate-coursor"); // Remove class when not intersecting
        }
    });
});
const coursor=document.querySelector(".commission__cursor")
cursorObserver.observe(coursor)



const exchangeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Element is intersecting");
                document.querySelector(".exchage__first").classList.add('animate-exchane-1');
                document.querySelector(".exchage__second").classList.add('animate-exchane-2');
                document.querySelector(".exchage__third").classList.add('animate-exchane-3');
            } else {
                console.log("Element is not intersecting");
                document.querySelector(".exchage__first").classList.remove('animate-exchane-1');
                document.querySelector(".exchage__second").classList.remove('animate-exchane-2');
                document.querySelector(".exchage__third").classList.remove('animate-exchane-3');
            }
        });
    }
);

const exchangeDemo = document.querySelector('.exchage__wrapper');
exchangeObserver.observe(exchangeDemo);

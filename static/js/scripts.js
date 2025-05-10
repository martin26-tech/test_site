var html = document.getElementsByTagName('html');
var ratios = document.getElementsByName('themes');

for (i = 0; i < ratios.length; i++){
    ratios[i].addEventListener('change', function(){
        html[0].classList.remove(html[0].classList.item(0));
        html[0].classList.add(this.id);
    })
}

// Add floating animation to elements
document.querySelectorAll('.animate-float').forEach(el => {
    el.style.animationDelay = `${Math.random() * 2}s`;
});
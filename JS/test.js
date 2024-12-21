
let accord = document.getElementsByClassName("accordion");
let i = 0

for( i = 0; i < accord.length; i++){
    accord[i].addEventListener("click", function(){
        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        if(panel.style.display === "block"){
            panel.style.display = "none"
        } else {
            panel.style.display = "block";
        }
    })
}

let ThemeToogle=document.querySelector("#themetoggle");

let Icon=document.querySelector("i");

let navBar=document.querySelector("nav")



ThemeToogle.addEventListener("click",()=>{
    if(Icon.classList.contains("fa-moon")){
        Icon.classList.replace("fa-moon","fa-sun")
        document.documentElement.classList.add("dark")
        // navBar.classList.toggle("dark:bg-black")
    }else{
        Icon.classList.replace("fa-sun","fa-moon")
        document.documentElement.classList.remove("dark")
        // Icon.classList.remove("remove")
        // navBar.classList.toggle("dark")
    }
})


window.addEventListener("load", () => {
    const hero = document.getElementById("hero");

    setTimeout(() => {
        hero.classList.remove("opacity-0", "translate-y-10");
    }, 200); // delay (milliseconds)
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {

        navBar.classList.add(
            "bg-white/70",
            "backdrop-blur-md",
            "shadow-lg"
        );

        navBar.classList.remove("bg-white");

    } else {

        navBar.classList.remove(
            "bg-white/70",
            "backdrop-blur-md",
            "shadow-lg"
        );

        navBar.classList.add("bg-white");
    }
});


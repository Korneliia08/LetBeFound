const blockMenu = document.querySelector(".blockMenu")
document.addEventListener("scroll", (event) => {

    blockMenu.classList.remove("moveNav")
    if (window.scrollY != 0) {
        blockMenu.classList.add("moveNav")

    }
})

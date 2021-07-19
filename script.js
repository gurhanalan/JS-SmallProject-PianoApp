const piano = document.querySelector(".piano");

piano.addEventListener("click", (e) => {
    if (e.target.classList.contains("white")) {
        e.target.classList.add("white--active");
        window.setTimeout(() => {
            e.target.classList.remove("white--active");
        }, 400);
    }
    if (e.target.classList.contains("black")) {
        e.target.classList.add("black--active");
        window.setTimeout(() => {
            e.target.classList.remove("black--active");
        }, 400);
    }

    if (e.target.classList.contains("key")) {
        let note = e.target.dataset.note;

        document.querySelector(`#${note}`).play();
    }
});

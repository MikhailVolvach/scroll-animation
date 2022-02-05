function onEntry(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add("item--active");
        }
    });
}
let options = { threshold: [0.35] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".item");
for (let elm of elements) {
    observer.observe(elm);
}

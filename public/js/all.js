function ready(f) {
    if(
        document.readyState === "interactive"
        || document.readyState === "complete"
    ){
        f();
    }
    else {
        document.addEventListener("DOMContentLoaded", f);
    }
};

ready(()=>{
    window.addEventListener("hashchange", ()=>{
        if(location.hash.length !== 0) {
            window.scrollTo(window.scrollX, window.scrollY - 105);
        }
    });
});

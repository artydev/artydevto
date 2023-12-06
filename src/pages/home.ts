import * as svc from "../services"

import van from 'vanjs-core';

const { div } = van.tags;

// https://medium.com/@astrogeek77/javascript-queuemicrotask-a1810baece02

function getArticles () {
    let elt = document.getElementById("home");
    svc.getArticles().then(() => {
        if (elt)
            elt.innerHTML = "TEST"
    })
}

const homePage = () => {
    queueMicrotask(getArticles);
    return div(
        div({id:'home'}, 'Home Page')
    )
} 

export { homePage }
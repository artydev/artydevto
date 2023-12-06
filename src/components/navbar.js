import van from 'vanjs-core';

const { div, span} = van.tags;

const NavBar = (nav_link) =>  div(
    { class: "navbar" },
    div(
      
        span({class:"logo"}, "LOGO"),
        nav_link({ name: 'home' }, 'Home'),
        span(' | '),
        nav_link({ name: 'user', params: { userId: 123 } }, 'User'),
        span(' | '),
        nav_link({ name: 'about' }, 'About')
    )
);

export {
    NavBar
}
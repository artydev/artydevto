import van from 'vanjs-core';

const { div , p} = van.tags

const userPage = (params) => div('User Page', p('userId: ' + params.userId))

export { userPage } 
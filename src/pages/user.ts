import van from 'vanjs-core';

const { div , p} = van.tags

const userPage = (params: { userId: string; }) => div('User Page', p('userId: ' + params.userId))

export { userPage } 
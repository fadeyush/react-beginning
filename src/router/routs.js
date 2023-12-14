import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";

export const privateRouter = [
    { path:'/posts', element: Posts, exact: true },
    { path:'/posts/:id', element: PostIdPage, exact: true },
    { path:'/about', element: About, exact: true },
    { path:'/error', element: Error, exact: true }
]

export const publicRouter = [
    { path:'/login', element: Login, exact: true }
]
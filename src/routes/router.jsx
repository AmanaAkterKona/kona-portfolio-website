import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";

import About from "../pages/About";
import { Component } from "react";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import Home from "../layouts/Home";
import Resume from "../pages/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
   Component: RootLayout,
   children: [
    {
        index: true,
        Component: Home 
    },
    {
       path:"hero",
       Component: Hero
    },
    {
        path:"about",
        Component: About
    },
    {
        path:"skills",
        Component: Skills
    },
    {
        path:"projects",
        Component: Projects
    },
    {
        path:"contact",
        Component:Contact
    },
    {
      path: "resume",
      Component: Resume
    }
   ]
  },
]);
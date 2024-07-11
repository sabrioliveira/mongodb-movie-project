import express from "express"
import movies from "./moviesRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Test"))

    app.use(express.json(), movies)
}

export default routes
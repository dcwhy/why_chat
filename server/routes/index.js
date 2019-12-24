'use strict'
const routes = (app) => {
    app.get('/', (req, res, next) => {
        res.render('index', { title: 'why真的很帅'})
    })
}
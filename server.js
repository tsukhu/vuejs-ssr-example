const express = require('express')
const compression = require('compression')
const fs = require('fs')
const path = require('path')
const code = fs.readFileSync(path.join(__dirname, './dist/server.js'), 'utf8')
const renderer = require('vue-server-renderer').createBundleRenderer(code)
const index = fs.readFileSync(path.join(__dirname, './dist/index.html'), 'utf8')
const app = express()

const getCurrentUser = () => {
  return Promise.resolve({
    username: 'acoshift',
    id: 1
  })
}

// compress all responses
app.use(compression())

app.use('/static', express.static(path.join(__dirname, './dist/static')))

app.get('/me', (req, res) => {
  getCurrentUser().then((currentUser) => {
    res.json(currentUser)
  }, (err) => {
    console.error(err)
    res.sendStatus(500)
  })
})

app.get('*', (req, res) => {
  getCurrentUser().then((currentUser) => {
    const store = { currentUser }

    renderer.renderToString(
      { url: req.url, store },
      (err, html) => {
        if (err) {
          console.log(err)
          return res.sendStatus(500)
        }
        res.send(index.replace('<div id=app></div>', html))
      }
    )
  })
})

app.listen(8080, () => {
  console.log('Vue SSR now running at now live at localhost:8080/');
})

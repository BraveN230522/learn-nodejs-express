class NewsController {
  index(req, res) {
    res.render('news')
  }
  detail(req, res) {
    res.send('news details')
  }
}

module.exports = new NewsController()

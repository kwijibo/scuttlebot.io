var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'apis',
  tab: 'apis-scuttlebot',
  path: '/apis/scuttlebot/block.html',
  content: md.doc(__dirname+'/block.md')
})
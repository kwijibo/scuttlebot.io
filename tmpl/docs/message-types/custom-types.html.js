var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Custom message types',
  section: 'docs',
  tab: 'docs-message-types',
  path: '/docs/message-types/custom-types.html',
  content: md.doc(__dirname+'/custom-types.md'),
  seeAlso: [
    ['/docs/message-types/custom-types.html', 'Message schemas'],
    ['/docs/advanced/links.html', 'Linking messages'],
    ['/apis/modules/ssb-msg-schemas.html', 'SSB-Msg-Schemas API']
  ],
  next: ['/docs/advanced/links.html', 'Links']
})
## Messages ordered by receive-time

You can fetch all of the messages in your Scuttlebot DB, merged into one stream.
To fetch them ordered by the timestamp at time-of-download, use 'createLogStream'.

```js
var pull = require('pull-stream')
pull(
  sbot.createLogStream({ reverse: true }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot log --reverse
```

The receive time of messages will differ for each user.
The "log" stream's order will never be the same between two devices.

[&rarr; createLogStream API](/apis/scuttlebot/ssb.html#createlogstream-source)
# dj-dev-bot
Publish your currently-playing track on Spotify to Slack. Hacky hack hack.

This will only work on a mac. It's also extremely specific to the Pebble Code slack.

You'll need a secrets.private.json file that looks like this:

```
{
  "token": "blahblahsomething"
}
```

where the blahblahsomething is your Slack API key.

You don't need a Spotify API key, since we're pulling the info out of your machine using Applescript.

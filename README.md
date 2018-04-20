# egg-elementui-example

> An example site built with eggjs, vue2 and elementui.

## Setup Dev Server

* Setup services server
``` shell
  cd egg-server
  npm run dev
```

* Setup front server
``` shell
  cd elementui-front
  npm run dev
```

## Deloyment

1. Build front code and move those files to server public folder
```
  cd elementui-front
  mv -f dist/* ../egg-server/app/public
```

2. Push files to git server and clone repo on the server, do
```
  npm install --production
  npm start
```
# node-api
Web API using node.js.

# usage

```
$ git clone git@github.com:masayuki5160/node-api.git
$ cd node-api
$ node app.js
```

# TEST

GET Request
```
$ curl -X GET http://localhost:3000/api/user/123
```

POST Request
```
$ curl http://localhost:3000/api/user -X POST -H "Content-Type: application/json" -d '{"name":"tanaka", "role": "group1"}'
```

# Appendix
* [Node.js + Express で WebAPI を作る](https://garafu.blogspot.com/2017/02/nodejs-express-webapi.html)

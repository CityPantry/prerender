#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender();

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.basicAuth());
server.use(prerender.whitelist());
// server.use(prerender.blacklist());
// server.use(prerender.logger());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.use(prerender.inMemoryHtmlCache());
server.use(prerender.redisHtmlCache());
server.use(prerender.s3HtmlCache());

server.start();

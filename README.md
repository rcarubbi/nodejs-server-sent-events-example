# nodejs-server-sent-events-example
## An simple example showing how to user server sent events with node.js

> Server Sent Events are a good option instead WebSockets when you just need one-way data flow (server to client)
> They are based in Http protocol and are much simplier than WebSockets Protocol.

### So, Let's get started!

1. Don't forget to run `npm install` before launch this project.
2. Launch the server typing `node server.js`
3. Open your browser and call `localhost:8080` to see the magic!

### Some notes...

If you inspect the code you will see that the client initializes the EventSource (SSE Client) passing "/sse" in the constructor.
This is the default path setted on SSE component in the server. Obviously you can override it if you want passing the path parameter in the SSE constructor on the server side.

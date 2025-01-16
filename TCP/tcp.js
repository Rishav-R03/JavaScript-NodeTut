const net = require("net");

const server = net.createServer(socket => {
    console.log("Client connected");
    socket.write("Hello.");
    socket.on("data", data => {
        console.log("Received:", data.toString());
    });
    socket.on("end", () => {
        console.log("Client disconnected");
    });
});

server.listen(PORT = 5000, "0.0.0.0", () => {
    console.log("Server listening on port 5000");
});
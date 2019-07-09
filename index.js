const server = require("./server/server");

server.start((err, app) => {
    console.log(`Serviço "${process.env.SERVICE_NAME}" esta ativo na porta ${app.address().port}`);
});

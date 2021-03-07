const http = require ('http')

const fs = require('fs')

http.createServer((req, res) => {
  const files = fs.createReadStream('Build.zip')

   res.writeHead(200, {'Content-disposition': 'attachment; filename=Build.zip'})


  files.pipe(res)
}).listen(4000)

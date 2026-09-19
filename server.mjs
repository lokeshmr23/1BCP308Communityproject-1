import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('public');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.geojson':'application/geo+json','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'};
const server=http.createServer(async(req,res)=>{
 try {
  let pathname=decodeURIComponent(new URL(req.url,'http://local').pathname);
  if(pathname==='/healthz'){res.writeHead(200,{'Content-Type':'application/json'});return res.end('{"status":"ok"}');}
  if(pathname.endsWith('/')) pathname+='index.html';
  const file=path.resolve(root,'.'+pathname);
  if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden');}
  const data=await fs.readFile(file);
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Cache-Control':'no-cache'});
  res.end(data);
 }catch {res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');}
});
server.listen(Number(process.env.PORT||3000),'0.0.0.0',()=>console.log(`Sahaya listening on 0.0.0.0:${process.env.PORT||3000}`));

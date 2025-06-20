
# Pets15

This is a generated MCP server. To run:

```bash
docker build -t pets15 .
docker run -p 8013:8013 --env-file .env.example pets15
```

Or run locally:

```bash
npm install
npm run build
cp .env.example .env
npm start
```

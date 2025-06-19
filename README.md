
# PetsPublic

This is a generated MCP server. To run:

```bash
docker build -t petspublic .
docker run -p 8009:8009 --env-file .env.example petspublic
```

Or run locally:

```bash
npm install
npm run build
cp .env.example .env
npm start
```

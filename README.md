# Pets26

Generated MCP server for Pets26

Generated MCP server from OpenAPI specification.

## Installation

```bash
npm install
npm run build
```

## Usage

### HTTP Mode
```bash
npm start
```

The server will start on port 8017.

### Stdio Mode (for MCP clients)
```bash
node dist/server.js
```

## Available Tools

- **updatePet**: Update an existing pet.
- **addPet**: Add a new pet to the store.
- **findPetsByStatus**: Finds Pets by status.
- **findPetsByTags**: Finds Pets by tags.
- **getPetById**: Find pet by ID.
- **updatePetWithForm**: Updates a pet in the store with form data.
- **deletePet**: Deletes a pet.
- **uploadFile**: Uploads an image.
- **getInventory**: Returns pet inventories by status.
- **placeOrder**: Place an order for a pet.
- **getOrderById**: Find purchase order by ID.
- **deleteOrder**: Delete purchase order by identifier.
- **createUser**: Create user.
- **createUsersWithListInput**: Creates list of users with given input array.
- **loginUser**: Logs user into the system.
- **logoutUser**: Logs out current logged in user session.
- **getUserByName**: Get user by user name.
- **updateUser**: Update user resource.
- **deleteUser**: Delete user resource.

## Configuration

Copy `.env.example` to `.env` and configure:

- `PORT`: Server port (default: 8017)
- `BASE_URL`: Base URL for API calls (default: https://petstore3.swagger.io/api/v3)

## MCP Client Configuration

### Stdio
```json
{
  "command": "node",
  "args": ["path/to/dist/server.js"]
}
```

### HTTP
```json
{
  "url": "http://localhost:8017/mcp"
}
```

### SSE
```json
{
  "url": "http://localhost:8017/mcp/sse"
}
```

## Development

```bash
npm run dev
```

## License

MIT

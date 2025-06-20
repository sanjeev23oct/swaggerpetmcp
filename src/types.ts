import { JSONSchema } from '../../src/types';

export interface MCPToolSchema {
  name: string;
  description: string;
  inputSchema: JSONSchema;
  outputSchema?: JSONSchema;
  operationId?: string;
}

export const openApiTools: MCPToolSchema[] = [
  {
    "name": "updatePet",
    "description": "Update an existing pet.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "body": {
          "description": "Update an existent pet in the store"
        }
      },
      "required": [
        "body"
      ],
      "additionalProperties": false
    },
    "outputSchema": {
      "required": [
        "name",
        "photoUrls"
      ],
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "name": {
          "type": "string",
          "example": "doggie"
        },
        "category": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "Dogs"
            }
          },
          "xml": {
            "name": "category"
          }
        },
        "photoUrls": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "string",
            "xml": {
              "name": "photoUrl"
            }
          }
        },
        "tags": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string"
              }
            },
            "xml": {
              "name": "tag"
            }
          }
        },
        "status": {
          "type": "string",
          "description": "pet status in the store",
          "enum": [
            "available",
            "pending",
            "sold"
          ]
        }
      },
      "xml": {
        "name": "pet"
      },
      "description": "Successful operation"
    },
    "operationId": "updatePet"
  },
  {
    "name": "addPet",
    "description": "Add a new pet to the store.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "body": {
          "description": "Create a new pet in the store"
        }
      },
      "required": [
        "body"
      ],
      "additionalProperties": false
    },
    "outputSchema": {
      "required": [
        "name",
        "photoUrls"
      ],
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "name": {
          "type": "string",
          "example": "doggie"
        },
        "category": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "Dogs"
            }
          },
          "xml": {
            "name": "category"
          }
        },
        "photoUrls": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "string",
            "xml": {
              "name": "photoUrl"
            }
          }
        },
        "tags": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string"
              }
            },
            "xml": {
              "name": "tag"
            }
          }
        },
        "status": {
          "type": "string",
          "description": "pet status in the store",
          "enum": [
            "available",
            "pending",
            "sold"
          ]
        }
      },
      "xml": {
        "name": "pet"
      },
      "description": "Successful operation"
    },
    "operationId": "addPet"
  },
  {
    "name": "findPetsByStatus",
    "description": "Finds Pets by status.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": {
          "type": "object",
          "properties": {
            "status": {
              "type": "string",
              "default": "available",
              "enum": [
                "available",
                "pending",
                "sold"
              ],
              "description": "Status values that need to be considered for filter"
            }
          },
          "description": "Query parameters"
        }
      },
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "array",
      "items": {
        "required": [
          "name",
          "photoUrls"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "name": {
            "type": "string",
            "example": "doggie"
          },
          "category": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64",
                "example": 1
              },
              "name": {
                "type": "string",
                "example": "Dogs"
              }
            },
            "xml": {
              "name": "category"
            }
          },
          "photoUrls": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "string",
              "xml": {
                "name": "photoUrl"
              }
            }
          },
          "tags": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "format": "int64"
                },
                "name": {
                  "type": "string"
                }
              },
              "xml": {
                "name": "tag"
              }
            }
          },
          "status": {
            "type": "string",
            "description": "pet status in the store",
            "enum": [
              "available",
              "pending",
              "sold"
            ]
          }
        },
        "xml": {
          "name": "pet"
        }
      },
      "description": "successful operation"
    },
    "operationId": "findPetsByStatus"
  },
  {
    "name": "findPetsByTags",
    "description": "Finds Pets by tags.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": {
          "type": "object",
          "properties": {
            "tags": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "Tags to filter by"
            }
          },
          "description": "Query parameters"
        }
      },
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "array",
      "items": {
        "required": [
          "name",
          "photoUrls"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "name": {
            "type": "string",
            "example": "doggie"
          },
          "category": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64",
                "example": 1
              },
              "name": {
                "type": "string",
                "example": "Dogs"
              }
            },
            "xml": {
              "name": "category"
            }
          },
          "photoUrls": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "string",
              "xml": {
                "name": "photoUrl"
              }
            }
          },
          "tags": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer",
                  "format": "int64"
                },
                "name": {
                  "type": "string"
                }
              },
              "xml": {
                "name": "tag"
              }
            }
          },
          "status": {
            "type": "string",
            "description": "pet status in the store",
            "enum": [
              "available",
              "pending",
              "sold"
            ]
          }
        },
        "xml": {
          "name": "pet"
        }
      },
      "description": "successful operation"
    },
    "operationId": "findPetsByTags"
  },
  {
    "name": "getPetById",
    "description": "Find pet by ID.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "petId": {
          "type": "integer",
          "format": "int64",
          "description": "ID of pet to return"
        }
      },
      "required": [
        "petId"
      ],
      "additionalProperties": false
    },
    "outputSchema": {
      "required": [
        "name",
        "photoUrls"
      ],
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "name": {
          "type": "string",
          "example": "doggie"
        },
        "category": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "Dogs"
            }
          },
          "xml": {
            "name": "category"
          }
        },
        "photoUrls": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "string",
            "xml": {
              "name": "photoUrl"
            }
          }
        },
        "tags": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string"
              }
            },
            "xml": {
              "name": "tag"
            }
          }
        },
        "status": {
          "type": "string",
          "description": "pet status in the store",
          "enum": [
            "available",
            "pending",
            "sold"
          ]
        }
      },
      "xml": {
        "name": "pet"
      },
      "description": "successful operation"
    },
    "operationId": "getPetById"
  },
  {
    "name": "updatePetWithForm",
    "description": "Updates a pet in the store with form data.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "petId": {
          "type": "integer",
          "format": "int64",
          "description": "ID of pet that needs to be updated"
        },
        "query": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "Name of pet that needs to be updated"
            },
            "status": {
              "type": "string",
              "description": "Status of pet that needs to be updated"
            }
          },
          "description": "Query parameters"
        }
      },
      "required": [
        "petId"
      ],
      "additionalProperties": false
    },
    "outputSchema": {
      "required": [
        "name",
        "photoUrls"
      ],
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "name": {
          "type": "string",
          "example": "doggie"
        },
        "category": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "Dogs"
            }
          },
          "xml": {
            "name": "category"
          }
        },
        "photoUrls": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "string",
            "xml": {
              "name": "photoUrl"
            }
          }
        },
        "tags": {
          "type": "array",
          "xml": {
            "wrapped": true
          },
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string"
              }
            },
            "xml": {
              "name": "tag"
            }
          }
        },
        "status": {
          "type": "string",
          "description": "pet status in the store",
          "enum": [
            "available",
            "pending",
            "sold"
          ]
        }
      },
      "xml": {
        "name": "pet"
      },
      "description": "successful operation"
    },
    "operationId": "updatePetWithForm"
  },
  {
    "name": "deletePet",
    "description": "Deletes a pet.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "petId": {
          "type": "integer",
          "format": "int64",
          "description": "Pet id to delete"
        },
        "headers": {
          "type": "object",
          "properties": {
            "api_key": {
              "type": "string",
              "description": ""
            }
          },
          "description": "Request headers"
        }
      },
      "required": [
        "petId"
      ],
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "object",
      "description": "Pet deleted"
    },
    "operationId": "deletePet"
  },
  {
    "name": "uploadFile",
    "description": "Uploads an image.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "petId": {
          "type": "integer",
          "format": "int64",
          "description": "ID of pet to update"
        },
        "query": {
          "type": "object",
          "properties": {
            "additionalMetadata": {
              "type": "string",
              "description": "Additional Metadata"
            }
          },
          "description": "Query parameters"
        },
        "body": {
          "description": "Request body"
        }
      },
      "required": [
        "petId"
      ],
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32"
        },
        "type": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      },
      "xml": {
        "name": "##default"
      },
      "description": "successful operation"
    },
    "operationId": "uploadFile"
  },
  {
    "name": "getInventory",
    "description": "Returns pet inventories by status.",
    "inputSchema": {
      "type": "object",
      "properties": {},
      "description": "No input parameters required"
    },
    "outputSchema": {
      "type": "object",
      "additionalProperties": {
        "type": "integer",
        "format": "int32"
      },
      "description": "successful operation"
    },
    "operationId": "getInventory"
  },
  {
    "name": "placeOrder",
    "description": "Place an order for a pet.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "body": {
          "description": "Request body"
        }
      },
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "petId": {
          "type": "integer",
          "format": "int64",
          "example": 198772
        },
        "quantity": {
          "type": "integer",
          "format": "int32",
          "example": 7
        },
        "shipDate": {
          "type": "string",
          "format": "date-time"
        },
        "status": {
          "type": "string",
          "description": "Order Status",
          "example": "approved",
          "enum": [
            "placed",
            "approved",
            "delivered"
          ]
        },
        "complete": {
          "type": "boolean"
        }
      },
      "xml": {
        "name": "order"
      },
      "description": "successful operation"
    },
    "operationId": "placeOrder"
  },
  {
    "name": "getOrderById",
    "description": "Find purchase order by ID.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "orderId": {
          "type": "integer",
          "format": "int64",
          "description": "ID of order that needs to be fetched"
        }
      },
      "required": [
        "orderId"
      ],
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "petId": {
          "type": "integer",
          "format": "int64",
          "example": 198772
        },
        "quantity": {
          "type": "integer",
          "format": "int32",
          "example": 7
        },
        "shipDate": {
          "type": "string",
          "format": "date-time"
        },
        "status": {
          "type": "string",
          "description": "Order Status",
          "example": "approved",
          "enum": [
            "placed",
            "approved",
            "delivered"
          ]
        },
        "complete": {
          "type": "boolean"
        }
      },
      "xml": {
        "name": "order"
      },
      "description": "successful operation"
    },
    "operationId": "getOrderById"
  },
  {
    "name": "deleteOrder",
    "description": "Delete purchase order by identifier.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "orderId": {
          "type": "integer",
          "format": "int64",
          "description": "ID of the order that needs to be deleted"
        }
      },
      "required": [
        "orderId"
      ],
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "object",
      "description": "order deleted"
    },
    "operationId": "deleteOrder"
  },
  {
    "name": "createUser",
    "description": "Create user.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "body": {
          "description": "Created user object"
        }
      },
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "username": {
          "type": "string",
          "example": "theUser"
        },
        "firstName": {
          "type": "string",
          "example": "John"
        },
        "lastName": {
          "type": "string",
          "example": "James"
        },
        "email": {
          "type": "string",
          "example": "john@email.com"
        },
        "password": {
          "type": "string",
          "example": "12345"
        },
        "phone": {
          "type": "string",
          "example": "12345"
        },
        "userStatus": {
          "type": "integer",
          "description": "User Status",
          "format": "int32",
          "example": 1
        }
      },
      "xml": {
        "name": "user"
      },
      "description": "successful operation"
    },
    "operationId": "createUser"
  },
  {
    "name": "createUsersWithListInput",
    "description": "Creates list of users with given input array.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "body": {
          "description": "Request body"
        }
      },
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "username": {
          "type": "string",
          "example": "theUser"
        },
        "firstName": {
          "type": "string",
          "example": "John"
        },
        "lastName": {
          "type": "string",
          "example": "James"
        },
        "email": {
          "type": "string",
          "example": "john@email.com"
        },
        "password": {
          "type": "string",
          "example": "12345"
        },
        "phone": {
          "type": "string",
          "example": "12345"
        },
        "userStatus": {
          "type": "integer",
          "description": "User Status",
          "format": "int32",
          "example": 1
        }
      },
      "xml": {
        "name": "user"
      },
      "description": "Successful operation"
    },
    "operationId": "createUsersWithListInput"
  },
  {
    "name": "loginUser",
    "description": "Logs user into the system.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": {
          "type": "object",
          "properties": {
            "username": {
              "type": "string",
              "description": "The user name for login"
            },
            "password": {
              "type": "string",
              "description": "The password for login in clear text"
            }
          },
          "description": "Query parameters"
        }
      },
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "string",
      "description": "successful operation"
    },
    "operationId": "loginUser"
  },
  {
    "name": "logoutUser",
    "description": "Logs out current logged in user session.",
    "inputSchema": {
      "type": "object",
      "properties": {},
      "description": "No input parameters required"
    },
    "outputSchema": {
      "type": "object",
      "description": "successful operation"
    },
    "operationId": "logoutUser"
  },
  {
    "name": "getUserByName",
    "description": "Get user by user name.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "username": {
          "type": "string",
          "description": "The name that needs to be fetched. Use user1 for testing"
        }
      },
      "required": [
        "username"
      ],
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "example": 10
        },
        "username": {
          "type": "string",
          "example": "theUser"
        },
        "firstName": {
          "type": "string",
          "example": "John"
        },
        "lastName": {
          "type": "string",
          "example": "James"
        },
        "email": {
          "type": "string",
          "example": "john@email.com"
        },
        "password": {
          "type": "string",
          "example": "12345"
        },
        "phone": {
          "type": "string",
          "example": "12345"
        },
        "userStatus": {
          "type": "integer",
          "description": "User Status",
          "format": "int32",
          "example": 1
        }
      },
      "xml": {
        "name": "user"
      },
      "description": "successful operation"
    },
    "operationId": "getUserByName"
  },
  {
    "name": "updateUser",
    "description": "Update user resource.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "username": {
          "type": "string",
          "description": "name that need to be deleted"
        },
        "body": {
          "description": "Update an existent user in the store"
        }
      },
      "required": [
        "username"
      ],
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "object",
      "description": "successful operation"
    },
    "operationId": "updateUser"
  },
  {
    "name": "deleteUser",
    "description": "Delete user resource.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "username": {
          "type": "string",
          "description": "The name that needs to be deleted"
        }
      },
      "required": [
        "username"
      ],
      "additionalProperties": false
    },
    "outputSchema": {
      "type": "object",
      "description": "User deleted"
    },
    "operationId": "deleteUser"
  }
];

const options = {
  "openapi": "3.0.0",
  "info": {
    "title": "GIF LIFE",
    "version": "1.0.0",
    "description": "Gif life a application to view and share a laugh with gif's"
  },
  "tags": [
    {
      "name": "GIFS",
      "description": "Operations related to gif's"
    }
  ],
  "servers": [
    {
      "url": process.env.SERVER_URL,
      "description": "Local server"
    }
  ],
  "paths": {
    "/gifs": {
      "get": {
        "summary": "Get all gifs",
        "tags": ["GIFS"],
        "responses": {
          "200": {
            "description": "Successful response"
          },
          "404": {
            "description": "Bad request: Cannot get the gifs"
          }
        }
      },
      "post": {
        "summary": "Create a user",
        "tags": ["GIFS"],
        "requestBody": {
          "required": true,
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "type": "string",
                    "description": "title of the gif",
                    "example": "Dancing gif"
                  },
                  "description": {
                    "type": "string",
                    "description": "description of the gif",
                    "example": "This is a man dancing"
                  },
                  "gifImage": {
                    "type": "string",
                    "format": "binary",
                    "description": "The image/gif of the content to upload"
                  },
                  "gifType": {
                    "type": "string",
                    "description": "The type of the gif",
                    "enum": ["cartoon", "general", "sport"]
                  }
                },
                "required": ["title", "description", "gifImage", "gifType"]
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "GIF created"
          },
          "400": {
            "description": "Bad request"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Gif": {
        "type": "object",
        "required": ["title", "description", "gifImage", "gifType"],
        "properties": {
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "gifImage": {
            "type": "string",
            "format": "binary"
          },
          "gifType": {
            "type": "string",
            "enum": ["cartoon", "general", "sport"]
          }
        }
      }
    }
  }
}

module.exports = options;

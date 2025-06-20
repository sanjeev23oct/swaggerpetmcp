import { Router, Request, Response } from 'express';
import axios from 'axios';

const router = Router();
const BASE_URL = process.env.BASE_URL || 'https://petstore3.swagger.io/api/v3';


// Update an existing pet.
router.post('/updatePet', async (req: Request, res: Response) => {
  try {
    const { body } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/pet`;
    
    // Prepare request configuration
    const config: any = {
      method: 'PUT',
      url,
      timeout: 30000
    };
    
    // Add request body
    if (body) {
      config.data = body;
      config.headers = { 
        ...config.headers, 
        'Content-Type': 'application/json' 
      };
    }
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('updatePet error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Add a new pet to the store.
router.post('/addPet', async (req: Request, res: Response) => {
  try {
    const { body } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/pet`;
    
    // Prepare request configuration
    const config: any = {
      method: 'POST',
      url,
      timeout: 30000
    };
    
    // Add request body
    if (body) {
      config.data = body;
      config.headers = { 
        ...config.headers, 
        'Content-Type': 'application/json' 
      };
    }
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('addPet error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Finds Pets by status.
router.post('/findPetsByStatus', async (req: Request, res: Response) => {
  try {
    const { query } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/pet/findByStatus`;
    
    // Prepare request configuration
    const config: any = {
      method: 'GET',
      url,
      timeout: 30000
    };
    
    // Add query parameters
    if (query) {
      config.params = query;
    }
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('findPetsByStatus error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Finds Pets by tags.
router.post('/findPetsByTags', async (req: Request, res: Response) => {
  try {
    const { query } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/pet/findByTags`;
    
    // Prepare request configuration
    const config: any = {
      method: 'GET',
      url,
      timeout: 30000
    };
    
    // Add query parameters
    if (query) {
      config.params = query;
    }
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('findPetsByTags error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Find pet by ID.
router.post('/getPetById', async (req: Request, res: Response) => {
  try {
    const { petId } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/pet/{petId}`;
    url = url.replace('{petId}', encodeURIComponent(petId));
    
    // Prepare request configuration
    const config: any = {
      method: 'GET',
      url,
      timeout: 30000
    };
    
    
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('getPetById error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Updates a pet in the store with form data.
router.post('/updatePetWithForm', async (req: Request, res: Response) => {
  try {
    const { petId, query } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/pet/{petId}`;
    url = url.replace('{petId}', encodeURIComponent(petId));
    
    // Prepare request configuration
    const config: any = {
      method: 'POST',
      url,
      timeout: 30000
    };
    
    // Add query parameters
    if (query) {
      config.params = query;
    }
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('updatePetWithForm error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Deletes a pet.
router.post('/deletePet', async (req: Request, res: Response) => {
  try {
    const { petId, headers } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/pet/{petId}`;
    url = url.replace('{petId}', encodeURIComponent(petId));
    
    // Prepare request configuration
    const config: any = {
      method: 'DELETE',
      url,
      timeout: 30000
    };
    
    // Add headers
    if (headers) {
      config.headers = { ...config.headers, ...headers };
    }
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('deletePet error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Uploads an image.
router.post('/uploadFile', async (req: Request, res: Response) => {
  try {
    const { petId, query, body } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/pet/{petId}/uploadImage`;
    url = url.replace('{petId}', encodeURIComponent(petId));
    
    // Prepare request configuration
    const config: any = {
      method: 'POST',
      url,
      timeout: 30000
    };
    
    // Add query parameters
    if (query) {
      config.params = query;
    }
    
    // Add request body
    if (body) {
      config.data = body;
      config.headers = { 
        ...config.headers, 
        'Content-Type': 'application/json' 
      };
    }
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('uploadFile error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Returns pet inventories by status.
router.post('/getInventory', async (req: Request, res: Response) => {
  try {
    const {  } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/store/inventory`;
    
    // Prepare request configuration
    const config: any = {
      method: 'GET',
      url,
      timeout: 30000
    };
    
    
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('getInventory error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Place an order for a pet.
router.post('/placeOrder', async (req: Request, res: Response) => {
  try {
    const { body } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/store/order`;
    
    // Prepare request configuration
    const config: any = {
      method: 'POST',
      url,
      timeout: 30000
    };
    
    // Add request body
    if (body) {
      config.data = body;
      config.headers = { 
        ...config.headers, 
        'Content-Type': 'application/json' 
      };
    }
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('placeOrder error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Find purchase order by ID.
router.post('/getOrderById', async (req: Request, res: Response) => {
  try {
    const { orderId } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/store/order/{orderId}`;
    url = url.replace('{orderId}', encodeURIComponent(orderId));
    
    // Prepare request configuration
    const config: any = {
      method: 'GET',
      url,
      timeout: 30000
    };
    
    
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('getOrderById error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Delete purchase order by identifier.
router.post('/deleteOrder', async (req: Request, res: Response) => {
  try {
    const { orderId } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/store/order/{orderId}`;
    url = url.replace('{orderId}', encodeURIComponent(orderId));
    
    // Prepare request configuration
    const config: any = {
      method: 'DELETE',
      url,
      timeout: 30000
    };
    
    
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('deleteOrder error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Create user.
router.post('/createUser', async (req: Request, res: Response) => {
  try {
    const { body } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/user`;
    
    // Prepare request configuration
    const config: any = {
      method: 'POST',
      url,
      timeout: 30000
    };
    
    // Add request body
    if (body) {
      config.data = body;
      config.headers = { 
        ...config.headers, 
        'Content-Type': 'application/json' 
      };
    }
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('createUser error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Creates list of users with given input array.
router.post('/createUsersWithListInput', async (req: Request, res: Response) => {
  try {
    const { body } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/user/createWithList`;
    
    // Prepare request configuration
    const config: any = {
      method: 'POST',
      url,
      timeout: 30000
    };
    
    // Add request body
    if (body) {
      config.data = body;
      config.headers = { 
        ...config.headers, 
        'Content-Type': 'application/json' 
      };
    }
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('createUsersWithListInput error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Logs user into the system.
router.post('/loginUser', async (req: Request, res: Response) => {
  try {
    const { query } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/user/login`;
    
    // Prepare request configuration
    const config: any = {
      method: 'GET',
      url,
      timeout: 30000
    };
    
    // Add query parameters
    if (query) {
      config.params = query;
    }
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('loginUser error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Logs out current logged in user session.
router.post('/logoutUser', async (req: Request, res: Response) => {
  try {
    const {  } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/user/logout`;
    
    // Prepare request configuration
    const config: any = {
      method: 'GET',
      url,
      timeout: 30000
    };
    
    
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('logoutUser error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Get user by user name.
router.post('/getUserByName', async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/user/{username}`;
    url = url.replace('{username}', encodeURIComponent(username));
    
    // Prepare request configuration
    const config: any = {
      method: 'GET',
      url,
      timeout: 30000
    };
    
    
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('getUserByName error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Update user resource.
router.post('/updateUser', async (req: Request, res: Response) => {
  try {
    const { username, body } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/user/{username}`;
    url = url.replace('{username}', encodeURIComponent(username));
    
    // Prepare request configuration
    const config: any = {
      method: 'PUT',
      url,
      timeout: 30000
    };
    
    // Add request body
    if (body) {
      config.data = body;
      config.headers = { 
        ...config.headers, 
        'Content-Type': 'application/json' 
      };
    }
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('updateUser error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});


// Delete user resource.
router.post('/deleteUser', async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    
    // Build URL with path parameters
    let url = `${BASE_URL}/user/{username}`;
    url = url.replace('{username}', encodeURIComponent(username));
    
    // Prepare request configuration
    const config: any = {
      method: 'DELETE',
      url,
      timeout: 30000
    };
    
    
    
    // Make API request
    const response = await axios(config);
    
    res.json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
    
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('deleteUser error:', errorMessage);

    if (error.response) {
      // API error
      res.status(error.response.status || 500).json({
        success: false,
        error: 'API Error',
        message: error.response.data?.message || errorMessage,
        status: error.response.status,
        data: error.response.data
      });
    } else {
      // Network or other error
      res.status(500).json({
        success: false,
        error: 'Request Failed',
        message: errorMessage
      });
    }
  }
});

// Generic LLM alias endpoints for robustness across all APIs
// These handle common LLM mistakes and provide better user experience

// Catch-all for missing endpoints - try to find a close match
router.use('*', async (req: Request, res: Response, next: any) => {
  if (req.method !== 'POST') return next();
  
  const requestedPath = req.path.replace('/tools/', '').replace('/', '');
  
  // Get all actual endpoint names from this router
  const actualEndpoints = router.stack
    .filter((layer: any) => layer.route && layer.route.path !== '*')
    .map((layer: any) => layer.route.path.replace('/', ''));
  
  // Try to find a close match using common patterns
  let bestMatch = null;
  
  // Common LLM naming patterns and their likely targets
  const patterns = [
    // "find" variations
    { pattern: /^(find|list|get|search|query)(.+)$/, target: (match: string) => actualEndpoints.find(ep => ep.includes(match.toLowerCase())) },
    
    // "create" variations  
    { pattern: /^(add|insert|new|create)(.+)$/, target: (match: string) => actualEndpoints.find(ep => ep.includes('create') || ep.includes('add')) },
    
    // "update" variations
    { pattern: /^(edit|modify|change|update)(.+)$/, target: (match: string) => actualEndpoints.find(ep => ep.includes('update') || ep.includes('edit')) },
    
    // "delete" variations
    { pattern: /^(remove|destroy|delete)(.+)$/, target: (match: string) => actualEndpoints.find(ep => ep.includes('delete') || ep.includes('remove')) }
  ];
  
  for (const { pattern, target } of patterns) {
    const match = requestedPath.match(pattern);
    if (match) {
      const baseWord = match[2];
      bestMatch = target(baseWord) || actualEndpoints.find(ep => 
        ep.toLowerCase().includes(baseWord.toLowerCase()) || 
        baseWord.toLowerCase().includes(ep.toLowerCase().split(/(?=[A-Z])/).join('').toLowerCase())
      );
      if (bestMatch) break;
    }
  }
  
  // If no pattern match, try exact substring matching
  if (!bestMatch) {
    bestMatch = actualEndpoints.find(ep => 
      ep.toLowerCase().includes(requestedPath.toLowerCase()) ||
      requestedPath.toLowerCase().includes(ep.toLowerCase())
    );
  }
  
  if (bestMatch) {
    console.log(`[ALIAS] Redirecting /${requestedPath} to /${bestMatch}`);
    req.url = `/${bestMatch}`;
    // req.path is read-only in Express, so do not assign to it!
    return next('route');
  }
  
  // If no match found, return helpful error with available endpoints
  res.status(404).json({
    error: 'Tool not found',
    message: `Tool '${requestedPath}' not found.`,
    availableTools: actualEndpoints,
    suggestion: `Did you mean one of: ${actualEndpoints.slice(0, 5).join(', ')}?`
  });
});

export { router };
export default router;
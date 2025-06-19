
module.exports = function(app) {

  app.put('/pet', (req, res) => {
    res.json({ message: "Stub for PUT /pet" });
  });

  app.post('/pet', (req, res) => {
    res.json({ message: "Stub for POST /pet" });
  });

  app.get('/pet/findByStatus', (req, res) => {
    res.json({ message: "Stub for GET /pet/findByStatus" });
  });

  app.get('/pet/findByTags', (req, res) => {
    res.json({ message: "Stub for GET /pet/findByTags" });
  });

  app.get('/pet/:petId', (req, res) => {
    res.json({ message: "Stub for GET /pet/{petId}" });
  });

  app.post('/pet/:petId', (req, res) => {
    res.json({ message: "Stub for POST /pet/{petId}" });
  });

  app.delete('/pet/:petId', (req, res) => {
    res.json({ message: "Stub for DELETE /pet/{petId}" });
  });

  app.post('/pet/:petId/uploadImage', (req, res) => {
    res.json({ message: "Stub for POST /pet/{petId}/uploadImage" });
  });

  app.get('/store/inventory', (req, res) => {
    res.json({ message: "Stub for GET /store/inventory" });
  });

  app.post('/store/order', (req, res) => {
    res.json({ message: "Stub for POST /store/order" });
  });

  app.get('/store/order/:orderId', (req, res) => {
    res.json({ message: "Stub for GET /store/order/{orderId}" });
  });

  app.delete('/store/order/:orderId', (req, res) => {
    res.json({ message: "Stub for DELETE /store/order/{orderId}" });
  });

  app.post('/user', (req, res) => {
    res.json({ message: "Stub for POST /user" });
  });

  app.post('/user/createWithList', (req, res) => {
    res.json({ message: "Stub for POST /user/createWithList" });
  });

  app.get('/user/login', (req, res) => {
    res.json({ message: "Stub for GET /user/login" });
  });

  app.get('/user/logout', (req, res) => {
    res.json({ message: "Stub for GET /user/logout" });
  });

  app.get('/user/:username', (req, res) => {
    res.json({ message: "Stub for GET /user/{username}" });
  });

  app.put('/user/:username', (req, res) => {
    res.json({ message: "Stub for PUT /user/{username}" });
  });

  app.delete('/user/:username', (req, res) => {
    res.json({ message: "Stub for DELETE /user/{username}" });
  });
};
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/auth/login", (req, res) => {
  const { username, password } = req.body;
  const userExist = router.db.get("users").find({ username, password }).value();
  if (userExist) {
    res.json(
      {
        status: "success",
        message: "Đăng nhập thành công",
        data: {
          username: userExist.username,
          status: "authenticated",
        },
      },
      200
    );
  } else {
    res.json(
      {
        status: "error",
        message: "Thông tin đăng nhập không chính xác",
      },
      401
    );
  }
});

server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running on port 3001");
});

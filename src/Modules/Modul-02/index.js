import express from "express";
import pinoHttp from "pino-http";
import { getEnv } from "../../utils/getEnv.js";
import { ENV_VARS } from "../../constants/env.js";

const app = express();
app.use(express.json());

// можливість отримати обєкти з req та res
// app.use(pinoHttp({
//   transport: {
//     target: 'pino-pretty',
//   }
// }));

// app.use((req, res, next) => {
//   res.send("Hello, Use!");
//   console.log(req.method);
//   console.log(req.query);
//   next();
// })
// app.use((req, res, next) => {
//   const { api_key } = req.query;
//   if (api_key!== "12345") {
//     return res.status(403).send("You are not allowed to make this request.");
//   }
//   res.send("Hello, Use!!!!!");
//   next();
// })
// app.use((req, res, next) => {
//   console.log('Middleware 1');
//   next();
// })

// app.use((req, res, next) => {
//   console.log('Middleware 2');
//   next();
// })
// app.use((req, res, next) => {
//   console.log('Middleware 3');
//   next();
// })

function middleware1(req, res, next) {
  console.log("Middleware 1");
  next();
}
function middleware2(req, res, next) {
  console.log("Middleware 2");
  next();
}
function middleware3(req, res, next) {
  console.log("Middleware 3");
  next();
}
app.use(middleware1);
app.use(middleware1);
app.use(middleware1);
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

function checkApiKey(req, res, next) {
  const { api_key } = req.query;
  if (api_key !== "12345") {
    return res.status(403).send("You are not allowed to make this request.");
  }
  next();
}

app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get(
  "/movies",
  checkApiKey,
  middleware1,
  middleware2,
  middleware1,
  (req, res) => {
    // const x =undefined.unknown();
    res.send("Hello, Movies!");
  }
);

app.use("*", (req, res, next) => {
  res.status(404).send("Not Found :(");
});
app.use((error, req, res, next) => {
  console.error(error);
   res.status(500).json({
    message: 'Something went wrong',
    error: error.message,
  });
});

const PORT = getEnv(ENV_VARS.PORT, 3001);
app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Server is running on port ${PORT}`);
  console.log("====================================");
});

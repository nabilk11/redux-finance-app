import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import productRoutes from "./routes/product.js";
import Product from "./models/Product.js";
import { kpis, products } from "./data/dummyData.js";
/* CONFIGURATION */
dotenv.config();

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */

app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);

/* MONGOOSE DB CONNECTION */
const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () =>
      console.log(`MongoDB is Now Connected & Server is Live on Port: ${PORT}`)
    );

    // SEEDED DUMMY DATA ONE-TIME OR AS NEEDED
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
  })
  .catch((err) => console.log(`Error connecting to Server: ${err}`));

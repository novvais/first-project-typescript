import { Router } from "express"
import { CarController } from "../app/controllers/carsControllers";

const route = Router()

route
  .route("/api/car")
  .post(new CarController().registerCar)
  .get(new CarController().listCars);
route
  .route("/api/car/:id")
  .put(new CarController().updateCar)
  .get(new CarController().detailCar)
  .delete(new CarController().deleteCar);

export { route }



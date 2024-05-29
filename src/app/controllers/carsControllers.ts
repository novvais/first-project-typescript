import { Request, Response } from "express";
import knex from "knex";

interface Error {
  message: string;
}

export class CarController {
  async registerCar(req: Request, res: Response) {
    const { marca, modelo, ano, cor, valor } = req.body;

    try {
      const carExist = await knex("carros").where({ marca }).andWhere({ modelo }).first()

      if (carExist) {
        return res.status(400).json({ message: "The car already exist."})
      }

      const data = await knex("carros").insert({
        marca,
        modelo,
        ano,
        cor,
        valor
      }).returning("*")

      return res.status(200).json(data);
    } catch {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateCar(req: Request, res: Response) {}

  async listCars(req: Request, res: Response) {
    try {
      const cars = await knex("carros");

      return res.status(200).json(cars);
    } catch {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async detailCar(req: Request, res: Response) {
    try {
      const cars = await knex("carros");

      return res.status(200).json(cars);
    } catch {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteCar(req: Request, res: Response) {
    try {
      const cars = await knex("carros");

      return res.status(200).json(cars);
    } catch {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

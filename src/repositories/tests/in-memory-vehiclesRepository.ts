import { Vehicle } from "../../entities/vehicle";
import { VehiclesRepository } from "../vehiclesRepository";

export class InMemoryVehiclesRepository implements VehiclesRepository {
  private vehicles: Vehicle[] = [];

  async create(vehicle: Vehicle): Promise<void> {
    this.vehicles.push(vehicle)
  }

  public get vehiclesList () {
    return this.vehicles;
  }
}
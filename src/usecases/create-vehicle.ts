import { Vehicle, VehicleProps } from "../entities/vehicle";
import { VehiclesRepository } from "../repositories/vehiclesRepository";

export interface ICreateVehicleDTO {
  CNPJ: string,
  name: string,
  address: string,
  phone: string,
  motorcycleLots: number,
  carLots: number
}

export class CreateVehicle {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute(vehicleProps: VehicleProps): Promise<Vehicle> {
    const {
      plate,
      brand,
      model,
      color,
      type
    } = vehicleProps;
    
    const vehicle = new Vehicle({
      plate,
      brand,
      model,
      color,
      type
    });

    await this.vehiclesRepository.create(vehicle);

    return vehicle;
  }
}
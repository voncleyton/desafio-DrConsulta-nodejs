import { Vehicle } from '../entities/vehicle';

export abstract class VehiclesRepository {
  abstract create(vehicle: Vehicle): Promise<void>;
}
import { VehicleProps } from "../entities/vehicle";
import { InMemoryVehiclesRepository } from "../repositories/tests/in-memory-vehiclesRepository";
import { CreateVehicle } from "./create-vehicle";

const VALID_PLATE = 'ANY0000'
const createVehicleFactory = () => {
  const vehiclesRepository = new InMemoryVehiclesRepository();
  const createVehicle = new CreateVehicle(vehiclesRepository);

  return {createVehicle, vehiclesRepository}
}

describe('Create Vehicle Use Case', () => {
  it('should be able to create a new vehicle', async () => {
    const { createVehicle, vehiclesRepository } = createVehicleFactory();

    const vehicleData: VehicleProps = {
      plate: VALID_PLATE,
      brand: 'any_brand',
      model: 'any_model',
      color: 'any_color',
      type: 'car',
    }

    const car = await createVehicle.execute(vehicleData);

    expect(car).toHaveProperty('_id');
    expect(vehiclesRepository.vehiclesList).toHaveLength(1);
  })
})
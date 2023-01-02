import { Vehicle } from "./vehicle";

it('should throw an error when vehicle\'s plate is invalid', () => {
  expect(() => {
    const car = new Vehicle({
      plate: 'invalid_plate',
      brand: 'any_brand',
      model: 'any_model',
      color: 'any_color',
      type: "car"
    });
  }).toThrow();
});
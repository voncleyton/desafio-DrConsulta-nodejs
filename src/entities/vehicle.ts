import crypto from 'crypto';

export interface VehicleProps {
  _id?: string;
  brand: string;
  model: string;
  color: string;
  plate: string;
  type: 'car' | 'motorcycle';
}

export class Vehicle {
  private props: VehicleProps;

  constructor(props: VehicleProps, id?: string) {
    if (!this.validatePlate(props.plate)) throw new Error('Invalid plate');

    this.props = {
      ...props,
      _id: props._id ?? crypto.randomUUID()
    }
  }

  private validatePlate(plate: string): boolean | null {
    const validRegExpPlate = '[A-Z]{3}[0-9][0-9A-Z][0-9]{2}';
    const isValidPlate = !!plate.match(validRegExpPlate);
    return isValidPlate;
  }

  public get _id (): string | undefined {
    return this.props._id;
  }
}
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
    this.props = {
      ...props,
      _id: props._id ?? crypto.randomUUID()
    }
  }

  public get _id (): string | undefined {
    return this.props._id;
  }
}
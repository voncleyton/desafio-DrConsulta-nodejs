import crypto from 'crypto';

export interface CompanyProps {
  _id?: string;
  name: string;
  CNPJ: string;
  address: string;
  phone: string;
  motorcycleLots: number;
  carLots: number;
}

export class Company {
  private props: CompanyProps;

  constructor(props: CompanyProps, id?: string) {
    this.props = {
      ...props,
      _id: props._id ?? crypto.randomUUID()
    }
  }

  public get _id (): string | undefined {
    return this.props._id;
  }
}
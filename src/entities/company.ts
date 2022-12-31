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
    if (!this.validateCNPJ(props.CNPJ)) throw new Error('Invalid CNPJ');

    if (props.motorcycleLots <= 0 && props.carLots <=0) throw new Error('You must inform at least one lot for motorcycles or cars');

    this.props = {
      ...props,
      _id: props._id ?? crypto.randomUUID()
    }
  }

  private validateCNPJ(cnpj: string): boolean | null {
    const validRegExpCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    const isValidCNPJ = !!cnpj.match(validRegExpCNPJ);
    return isValidCNPJ;
  }

  public get _id (): string | undefined {
    return this.props._id;
  }
}
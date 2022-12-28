import { Company } from "../entities/company";

export interface ICreateCompanyDTO {
  CNPJ: string,
  name: string,
  address: string,
  phone: string,
  motorcycleLots: number,
  carLots: number
}

export class CreateCompany {
  constructor() {}

  execute(companyProps: ICreateCompanyDTO): Company {
    const {
      CNPJ,
      name,
      address,
      phone,
      motorcycleLots,
      carLots
    } = companyProps;
    
    const company = new Company({
      CNPJ,
      name,
      address,
      phone,
      motorcycleLots,
      carLots
    });

    return company;
  }
}
import { Company } from "../entities/company";
import { CompaniesRepository } from "../repositories/companiesRepository";

export interface ICreateCompanyDTO {
  CNPJ: string,
  name: string,
  address: string,
  phone: string,
  motorcycleLots: number,
  carLots: number
}

export class CreateCompany {
  constructor(private companiesRepository: CompaniesRepository) {}

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

    this.companiesRepository.create(company);

    return company;
  }
}
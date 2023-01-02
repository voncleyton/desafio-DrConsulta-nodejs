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

  async execute(companyProps: ICreateCompanyDTO): Promise<Company> {
    const {
      CNPJ,
      name,
      address,
      phone,
      motorcycleLots,
      carLots
    } = companyProps;
    
    const existingCompany = await this.companiesRepository.findByCNPJ(CNPJ);
    
    if (existingCompany) throw new Error('Company already exists');

    const company = new Company({
      CNPJ,
      name,
      address,
      phone,
      motorcycleLots,
      carLots
    });

    await this.companiesRepository.create(company);

    return company;
  }
}
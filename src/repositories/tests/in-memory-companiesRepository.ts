import { Company } from "../../entities/company";
import { CompaniesRepository } from "../companiesRepository";

export class InMemoryCompaniesRepository implements CompaniesRepository {
  public companies: Company[] = [];

  async create(company: Company): Promise<void> {
    this.companies.push(company);
  };

  async findByCNPJ(cnpj: string): Promise<Company | undefined> {
    const company = this.companies.find(company => {
      return company.CNPJ === cnpj
    })
    return company;
  }
}
import { Company } from "../../entities/company";
import { CompaniesRepository } from "../companiesRepository";

export class InMemoryCompaniesRepository implements CompaniesRepository {
  private companies: Company[] = [];

  async create(company: Company): Promise<void> {
    this.companies.push(company);
  }
}
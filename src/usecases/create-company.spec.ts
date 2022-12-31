import { Company } from "../entities/company";
import { CompaniesRepository } from "../repositories/companiesRepository";
import { InMemoryCompaniesRepository } from "../repositories/tests/in-memory-companiesRepository";
import { CreateCompany, ICreateCompanyDTO } from "./create-company";

const VALID_CNPJ = '14.245.016/0001-79';

const createCompanyFactory = () => {
  const companiesRepository = new InMemoryCompaniesRepository();
  const createCompany = new CreateCompany(companiesRepository);

  return {createCompany}
}

describe('Create Company Use Case', () => {
  it('should be possible to create a new company', () => {
    const { createCompany } = createCompanyFactory();

    const companyData: ICreateCompanyDTO = {
      CNPJ: VALID_CNPJ,
      name: 'any_name',
      address: 'any_address',
      phone: 'any_phone',
      motorcycleLots: 1,
      carLots: 1
    }

    const company = createCompany.execute(companyData);

    expect(company).toHaveProperty('_id');
  });
});
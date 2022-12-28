import { CompanyProps } from "../entities/company";
import { CreateCompany, ICreateCompanyDTO } from "./create-company";

describe('Create Company Use Case', () => {
  it('should be possible to create a new company', () => {
    const createCompany = new CreateCompany();

    const companyData: ICreateCompanyDTO = {
      CNPJ: '14.245.016/0001-79',
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
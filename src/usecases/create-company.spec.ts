import { CompanyProps } from "../entities/company";
import { CreateCompany, ICreateCompanyDTO } from "./create-company";

const VALID_CNPJ = '14.245.016/0001-79'
describe('Create Company Use Case', () => {
  it('should be possible to create a new company', () => {
    const createCompany = new CreateCompany();

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

it('should throw an error when company\'s CNPJ is invalid', () => {
  const createCompany = new CreateCompany();

  const companyData: ICreateCompanyDTO = {
    CNPJ: 'invalid_CNPJ',
    name: 'any_name',
    address: 'any_address',
    phone: 'any_phone',
    motorcycleLots: 1,
    carLots: 1
  }

  expect(() => createCompany.execute(companyData)).toThrow();
});
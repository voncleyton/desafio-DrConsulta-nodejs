import { Company } from "./company";
import { CreateCompany, ICreateCompanyDTO } from "./create-company";

const VALID_CNPJ = '14.245.016/0001-79'

describe('Company Entity', () => {
  it('should throw an error when company\'s CNPJ is invalid', () => {
    expect(() => {
      const company = new Company({
        CNPJ: 'invalid_CNPJ',
        name: 'any_name',
        address: 'any_address',
        phone: 'any_phone',
        motorcycleLots: 1,
        carLots: 1
      })
    }).toThrow();
  });
  
  it('should throw an error when no parking lots of any type are provided', () => {
    expect(() => {
      const company = new Company({
        CNPJ: VALID_CNPJ,
        name: 'any_name',
        address: 'any_address',
        phone: 'any_phone',
        motorcycleLots: 0,
        carLots: 0
      })
    }).toThrow();
  });
})

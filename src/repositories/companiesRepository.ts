import { Company } from '../entities/company';

export abstract class CompaniesRepository {
  abstract create(company: Company): Promise<void>;
  abstract findByCNPJ(cnpj: string): Promise<Company | undefined>;
}
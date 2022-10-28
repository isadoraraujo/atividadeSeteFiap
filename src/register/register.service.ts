import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
  async create(req): Promise<string> {
    const {
      name,
      email,
      password,
      site,
      phone
    } = req
    return `Cliente ${req.name} cadastrado com sucesso!`
  }
}
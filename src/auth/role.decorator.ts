import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => SetMetadata('role', role);
// alterar o comportamento de uma variavel, função, metodo ou classe
// metadata

import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido.' })
  email: string;

  @MinLength(8, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  senha: string;
}

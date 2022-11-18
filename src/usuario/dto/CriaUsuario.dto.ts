import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEUnico } from '../validacao/email-e-unico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido.' })
  @EmailEUnico({ message: 'Já existe um usuário com este e-mail.' })
  email: string;

  @MinLength(8, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  senha: string;
}

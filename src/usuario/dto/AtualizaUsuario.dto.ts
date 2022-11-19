import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailEUnico } from '../validacao/email-e-unico.validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido.' })
  @EmailEUnico({ message: 'Já existe um usuário com este e-mail.' })
  @IsOptional()
  email: string;

  @MinLength(8, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  @IsOptional()
  senha: string;
}

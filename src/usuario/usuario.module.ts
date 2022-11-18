import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { EmailEUnicoValidator } from './validacao/email-e-unico.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEUnicoValidator],
})
export class UsuarioModule {}

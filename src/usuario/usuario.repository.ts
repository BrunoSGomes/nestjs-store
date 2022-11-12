import { Injectable } from '@nestjs/common';
import { IUsuario } from './usuario.interface';

@Injectable()
export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario: IUsuario) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }
}

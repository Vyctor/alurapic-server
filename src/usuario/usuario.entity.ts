import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario-unico.validator';

export class Usuario {
  id: number;

  @IsNomeDeUsuarioUnico({
    message: 'nomeDeUsuario precisa ser único.',
  })
  @IsNotEmpty({
    message: 'nomeDeUsuario é obrigatório.',
  })
  @IsString({
    message: 'nomeDeUsuario precisa ser uma string.',
  })
  @Expose({
    name: 'username',
  })
  nomeDeUsuario: string;

  @IsEmail(
    {},
    {
      message: 'email precisa ser um endereço de email válido.',
    },
  )
  email: string;

  @IsNotEmpty({
    message: 'senha é obrigatório.',
  })
  @Exclude({
    toPlainOnly: true,
  })
  @Expose({
    name: 'password',
  })
  senha: string;

  @IsNotEmpty({
    message: 'nomeCompleto é obrigatório.',
  })
  @Expose({
    name: 'fullName',
  })
  nomeCompleto: string;
  @Expose({
    name: 'joinDate',
  })
  dataDeEntrada: Date;
}

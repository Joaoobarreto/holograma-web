export class Usuario {
  id: string | undefined;
  nome: string | undefined;
  cpf: string | undefined;
  email: string | undefined;
  telefone: string | undefined;
  endereco: {
    cep: string | undefined;
    pais: string | undefined;
    estado: string | undefined;
    cidade: string | undefined;
    logradouro: string | undefined;
    numero: number | undefined;
    bairro: string | undefined
  } | undefined
}

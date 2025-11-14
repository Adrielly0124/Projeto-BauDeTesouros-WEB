export interface Usuario {
  uid: string;
  nome: string;
  email: string;
  tipo: "responsavel" | "aprendiz";
  criadoEm: Date;
}

export function criarUsuario(data: any): Usuario {
  return {
    uid: data.uid,
    nome: data.nome,
    email: data.email,
    tipo: data.tipo ?? "responsavel",
    criadoEm: data.criadoEm ? new Date(data.criadoEm) : new Date(),
  };
}

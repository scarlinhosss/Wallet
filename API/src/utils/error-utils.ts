import { ErrorMessages } from "../protocols/error-protocols";

export const errorMessages: ErrorMessages = {
  generic: "Ocorreu um erro inesperado! Tente novamente mais tarde.",
  loginFail: "Usuário ou senha inválidos!",
  duplicatedEmail: "Este email já está cadastrado! Faça o login.",
  duplicatedSession: "Você já está logado",
  invalidFields: "Um ou mais dos campos fornecidos são inválidos ou estão em branco!",
  missingValues: "Preencha todos os campos solicitados!",
  userNotFound: "Usuário não encontrado!",
  invalidKey: "Chave de ativação inválida!",
  alreadyValidated: "Sua conta já foi ativada!",
  pendingValidation: "Sua conta ainda não foi ativada!",
  lowerPermission: "Você não tem a permissão necessária para realizar esta operação!",
  dataNotFound: "Não foi possível encontrar os dados solicitados!",
  unauthorized: "Você deve estar logado para continuar!",
  invalidExpirationDate: "A data de validade fornecida já expirou!",
  uploadError: "Um ou mais arquivos não puderam ser salvos!",
};

export const getStatusClass = (status: string): string[] => {
  switch (status) {
    case "agendado":
      return ["bg-status-agendado"];
    case "atendido":
      return ["bg-status-atendido"];
    case "cancelado":
      return ["bg-status-cancelado"];
    case "aguardando":
      return ["bg-status-aguardando"];
    default:
      return [];
  }
};

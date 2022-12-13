export function dateToHumanReadable(value: any) {
  return value ? new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(Date.parse(value + "T00:00:00")) : "";
}

export function dateToShortHumanReadable(value: any) {
  if (value && value != "") {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric"
    }).format(Date.parse(value + (value.length > 10 ? "" : "T00:00:00Z")));
  }
  return "";
}
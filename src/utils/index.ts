export const formatDate = (isoString: string) =>
  new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date(isoString));

export * from "./date";
export * from "./getImagePath";
export * from "./translate";

export const shorten = (payload: string, limit = 90) =>
  payload.length > limit ? payload.slice(0, limit) + "..." : payload;

export const capitalize = (payload?: string) =>
  payload ? payload.charAt(0).toUpperCase() + payload.slice(1) : null;

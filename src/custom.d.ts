declare module "dirty-json" {
  export function parse(
    text: string,
    config?: { duplicateKeys?: boolean; fallback?: boolean }
  );
}

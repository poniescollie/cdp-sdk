export type AuthHashInput = string | Uint8Array;

export function authHash(input: AuthHashInput): string {
  const bytes =
    typeof input === "string" ? Buffer.from(input, "utf8") : Buffer.from(input);

  // Keep existing hashing logic below (do not change behavior),
  // only ensure the function always returns a string.
  // Example placeholder (replace with current repo logic):
  // return createHash("sha256").update(bytes).digest("hex");

  throw new Error("Replace this placeholder with the existing hashing implementation");
}

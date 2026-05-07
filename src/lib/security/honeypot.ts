export function isHoneypotTriggered(honeypotValue: string | undefined | null): boolean {
  return !!honeypotValue && honeypotValue.trim().length > 0;
}

export const HONEYPOT_FIELD_NAME = "company_url";

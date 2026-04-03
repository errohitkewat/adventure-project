import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";

type SessionPayload = {
  email: string;
  exp: number;
};

function base64UrlEncode(value: string) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64UrlDecode(value: string) {
  value = value.replace(/-/g, "+").replace(/_/g, "/");
  while (value.length % 4) value += "=";
  return Buffer.from(value, "base64").toString("utf8");
}

export function createSessionToken(email: string) {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET is missing");

  const payload: SessionPayload = {
    email,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000,
  };

  const payloadString = JSON.stringify(payload);
  const encodedPayload = base64UrlEncode(payloadString);

  const signature = crypto
    .createHmac("sha256", secret)
    .update(encodedPayload)
    .digest("hex");

  return `${encodedPayload}.${signature}`;
}

export function verifySessionToken(token: string | undefined) {
  if (!token) return null;

  const secret = process.env.SESSION_SECRET;
  if (!secret) return null;

  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) return null;

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(encodedPayload)
    .digest("hex");

  if (expectedSignature !== signature) return null;

  try {
    const payload = JSON.parse(
      base64UrlDecode(encodedPayload)
    ) as SessionPayload;

    if (Date.now() > payload.exp) return null;

    return payload;
  } catch {
    return null;
  }
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return verifySessionToken(token);
}

export const adminCookieName = COOKIE_NAME;
import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import "dotenv/config";

// init arcjet
export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    // shield protect app from common attack e.g sql injection, xss, etc
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      // block all except search engines
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    // rate limiting

    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});

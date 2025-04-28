
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize Upstash Redis client from env
const redis = Redis.fromEnv();

// Create a sliding-window rate limiter: 5 requests per minute per key
const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 m"),
});

/**
 * Checks if the IP address has exceeded the rate limit.
 * @param ip - The IP address to check.
 * @returns A Promise that resolves to a boolean indicating whether the IP address has exceeded the rate limit.
 */
export async function checkRateLimit(ip: string): Promise<boolean> {
  const { success } = await rateLimiter.limit(ip);

  return success;
}

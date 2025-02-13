// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const clientIp = event.getClientAddress();
  console.log('Client IP:', clientIp); // Log the IP address for debugging purposes

  // You can also store the IP in event.locals if needed
  event.locals.clientIp = clientIp;

  return resolve(event);
};

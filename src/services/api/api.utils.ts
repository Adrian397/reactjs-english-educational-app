/*eslint-disable*/

import { sessionService } from "@services/SessionService";

export const asyncWrapper =
  <A, R>(handler: (args: A) => Promise<R>) =>
  async (args: A): Promise<R> => {
    try {
      const result = await handler(args);
      return result;
    } catch (err: any) {
      if (err.response.status === 401) {
        // refresh token then again call handler
        await sessionService.refreshToken();
        const result = await handler(args);
        return result;
      }
    }

    throw new Error("Something went wrong");
  };

/*eslint-disable*/

import { sessionService } from "@services/SessionService";

type HandlerType = (...args: any) => Promise<any>;

export const asyncWrapper =
  (handler: HandlerType) =>
  async (...args: any): Promise<any> => {
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
  };

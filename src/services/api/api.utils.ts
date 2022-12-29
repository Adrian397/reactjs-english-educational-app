/*eslint-disable*/
import { apiService } from "./api.service";

type HandlerType = () => Promise<any>;

export const asyncWrapper = (handler: HandlerType) => async () => {
  try {
    const result = await handler();
    return result;
  } catch (err: any) {
    if (err.response.status === 401) {
      // refresh token then again call handler
      await apiService.refreshToken();
      const result = await handler();
      return result;
    }
  }
};

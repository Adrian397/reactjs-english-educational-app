import { AxiosResponse } from "axios";
import { apiService } from "./api.service";
/*eslint-disable*/
type ApiServiceMethods = keyof typeof apiService;

export const getDataFromResponse = async (
  response: AxiosResponse,
  funName: ApiServiceMethods,
  ...args: any
): Promise<any> => {
  if (response.status === 401) {
    console.log("error");
    await apiService.refreshToken();
    return await apiService[funName](args);
  }

  return response.data;
};

// type HandlerType = () => Promise<any>;

// export const asyncWrapper = async (handler: HandlerType) => {
//   try {
//     return handler();
//   } catch (err: any) {
//     if (err.response.status === 401) {
//       // refresh token then again call handler
//       await apiService.refreshToken();
//       return handler();
//     }
//   }
// };

import { DetailsRoutes } from "../screens/Details";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      details: DetailsRoutes;
    }
  }
}
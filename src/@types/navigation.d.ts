import { DetailsRoutes } from "../screens/Details";
import { HomeRouteProps } from "../screens/Home";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: HomeRouteProps;
      details: DetailsRoutes;
      shopping: undefined;
    }
  }
}
type Pathname = string;
type Search = string;
type Hash = string;

type Query = Object;
type LocationState = ?Object;

type LocationDescriptorObject = {
  pathname: Pathname;
  search: Search;
  query: Query;
  state: LocationState;
};

type Path = Pathname + Search + Hash;

type LocationDescriptor = LocationDescriptorObject | Path;

declare module 'react-router-redux' {
  declare interface ReactRouterRedux {
    go: (number: number) => any;
    goBack: () => any;
    goForward: () => any;
    push: (location: LocationDescriptor) => any;
    replace: (location: LocationDescriptor) => any;
    syncHistoryWithStore: (history: Object, state: any, options: ?{
      adjustUrlOnReplay?: boolean,
      selectLocationState?: (state: any) => any,
    }) => Object;
    routerMiddleware: (history: Object) => any;
    routerReducer: Function;
    LOCATION_CHANGE: string;
  }
  declare var exports: ReactRouterRedux;
}

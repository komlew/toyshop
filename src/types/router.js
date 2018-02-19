// @flow
export type RouterParams = {|
  +productID: string,
|};

export type RouterMatch = {|
  +isExact: boolean,
  +params: RouterParams,
  +path: string,
  +url: string,
|};

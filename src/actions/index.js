// @flow
import { DATA_REQUEST } from '../constants';
import type { ActionRequestProdcuts } from '../types';

export default (): ActionRequestProdcuts => ({
  type: DATA_REQUEST.PRODUCTS,
});

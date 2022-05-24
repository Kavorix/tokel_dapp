import { createContext } from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
enum MARKETPLACE_VIEWS {
  FILL,
  ASK,
  BID,
  ORDERS,
  OFFERS,
}

const ViewContext = createContext<{
  currentView: MARKETPLACE_VIEWS | null;
  setCurrentView: (view: MARKETPLACE_VIEWS) => void;

  currentOrderId?: string;
  setCurrentOrderId?: (orderId: string) => void;
}>(null);

export { MARKETPLACE_VIEWS };
export default ViewContext;

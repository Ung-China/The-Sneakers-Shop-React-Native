import {NotificationProps} from '../Notification';
import {SeeMoreProps} from '../SeeMore';

export type StackParamList = {
  Root: undefined;
  CartStack: undefined;
  OrderHistoryStack: undefined;
  HomeTabs: undefined;
  Search: undefined;
  Cart: undefined;
  OrderHistory: undefined;
  Notification: undefined;
  AboutUs: undefined;
  Language: undefined;
  Favorite: undefined;
  SignOutModal: undefined;
  DeleteAccountModal: undefined;
  CurrentLocation: undefined;
  NotificationDetail: {item: NotificationProps['item']};
  Brand: {id?: number};
  OrderHistoryDetail: undefined;
  ProductDetail: {id: number; brandId: number};
  EditProfile: undefined;
  Checkout: undefined;
  Delivery: undefined;
  Address: undefined;
  LoginModal: undefined;
  Appearance: undefined;
  CreateAccount: undefined;
  ForgotPassword: undefined;
  ShopLocation: undefined;
  SeeMoreScreen: SeeMoreProps;
};

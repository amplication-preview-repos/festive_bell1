import { SortOrder } from "../../util/SortOrder";

export type PageOrderByInput = {
  about?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  dashboard?: SortOrder;
  home?: SortOrder;
  id?: SortOrder;
  isAuthRequired?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

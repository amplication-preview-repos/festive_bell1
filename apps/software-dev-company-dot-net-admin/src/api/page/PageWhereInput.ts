import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PageWhereInput = {
  about?: StringNullableFilter;
  content?: StringNullableFilter;
  dashboard?: StringNullableFilter;
  home?: StringNullableFilter;
  id?: StringFilter;
  isAuthRequired?: BooleanNullableFilter;
  title?: StringNullableFilter;
};

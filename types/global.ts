export type ITranslated = {
  en: string | null;
  fr: string | null;
}
export type ISEO = {
  _id: string;
  pathname: string | null;
  title: ITranslated;
  description: ITranslated;
};
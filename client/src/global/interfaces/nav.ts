export interface Enlace {
  text: string;
  click: (() => void);
  val: currentLink;
}

export type currentLink =
| "inicio"
| "profile"
| "realEstateFilter"
| "question"
| "configure"
| "goOut";

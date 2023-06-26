export interface PriceBoxProps {
  data: Array<{
    title: string;
    subtitle: string;
    value: string;
    textBanner?: string
  }>
  subtitleColor?: string
}


export interface LabelProps {
  title: string,
  subtitle: string
  textBanner: string | undefined
}
export interface NavigatorProps {
  title: string;
  menuItens: {
    anchor: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
      muiName: string;
    };
    destiny: string;
  }[];
}

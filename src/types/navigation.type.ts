export type TNavigationList = TNavigationItem[];

export type TNavigationItem = {
  text: string;

  routeName: string;
  icon: {
    active: string;
    inactive: string;
  };
  children?: Omit<TNavigationItem, 'icon'>[];
};

const setStyleVariants = (component: string, props: any) => {
  if (props.theme?.[component]?.[props.variante]) {
    props.theme[component] = props.theme[component][props.variante];
  }
};

export { setStyleVariants };

export function addParams(Component) {
  return (props) => {
    return <Component {...props} label="HOC" {...params} />;
  };
}

import { ComponentType, useState } from "react";


export function withEditState(Component: ComponentType<any>) {
  return function WrappedComponent(props: any) {
    const [edit, setEdit] = useState(false);
    return <Component {...props} edit={edit} setEdit={setEdit} />;
  };
}

export default withEditState;

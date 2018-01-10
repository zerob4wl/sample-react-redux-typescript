interface IAction<T> {
  payload: T;
  type: string;
}

export default IAction;

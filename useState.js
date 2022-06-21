class state {
  constructor(value) {
    this.value = value;
  }
  setter(value) {
    this.value = value;
  }
}
const useState = (value) => {
  let State = new state(value);
  let Setter = State.setter;
  return [State, Setter.bind(State)];
};
const [point, setpoionter] = useState(1);

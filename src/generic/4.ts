/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor (public props:T) {

  }
}

interface PropsComponent {
  title: string;
}

class Page extends Component<PropsComponent> {
  pageInfo ():void {
    console.log(this.props.title);
  }
}

export {};
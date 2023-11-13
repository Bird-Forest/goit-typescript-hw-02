/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Component {
  title: string;
}

class Page implements Component {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
  pageInfo () {
    console.log(this.title);
  }
}

export {};

// **********************************************
// interface Component {
//   title: string;
// }

// interface Page extends Component {
//   title: string;
//   pageInfo: () =>  console.log(this.title);
// }
// *********************************************


// class Component {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }


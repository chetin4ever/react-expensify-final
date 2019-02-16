class IndecisionApp extends React.Component {
  constructor(props) {
    // console.log(props.options);
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);

    this.state = {
      options: []
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) this.setState(() => ({ options }));

      //console.log('comoponent did mounted !');
    } catch (e) {
      //do noting
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("saving data");
    }
  }
  componentWillUnmount() {
    console.log("component will unmounted !");
    //try to unmount the component unsing the follwing line
    //ReactDOM.render(React.createElement('p'),document.getElementById('app'));
  }

  // for deleting all items from the list
  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options:[]
    //   };
    // });
    this.setState(() => ({ options: [] }));
  }
  //for deleting specific item from list
  handleDeleteOption(optionToRemove) {
    console.log("hdo", optionToRemove);
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }
  // picking random task to done
  handlePick() {
    // alert('handlePick');
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  //add task to the list
  handleAddOption(option) {
    //console.log(option);
    if (!option) {
      //if no value is enter
      return "Enter Valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists!";
    }
    // this.setState((prevState)=>{
    //     return{
    //      // options: prevState.options.concat([option])//or
    //       options: prevState.options.concat(option)
    //     };
    // });

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  }
  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        {/* had option based on options array is empty or contain data */}
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
// IndecisionApp.defaultProps = {
//   options: []
// };

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App"
};
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>{this.props.subtitle}</p>
//       </div>
//     );
//   }
// }

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        what should i do?
      </button>
    </div>
  );
};
// class Action extends React.Component {
//   render() {
//     return (
//       <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
//         what should i do?
//       </button>
//     );
//   }
// }

const Options = props => {
  return (
    <div>
      {/* {console.log(props)} */}
      {/* this.handleremoveAll.bind(this); */}
      {props.options.length === 0 && <p>Please add an option to get started...!!!</p>}
      <button onClick={props.handleDeleteOptions}>RemoveAll</button>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};
// class Options extends React.Component {
//   // constructor(props){
//   //     super(props);

//   //         //method binding
//   //         // if you not bind then causes error in handleRemoveAll() function
//   //         // bind can be used inline or in constructor

//   // //        this.handleRemoveAll=this.handleRemoveAll.bind(this);

//   // }

//   // handleRemoveAll(){
//   //     //alert('handleremoveAll');
//   //     console.log(this.props.options);
//   // }
//   render() {
//     return (
//       <div>
//         {/* this.handleremoveAll.bind(this); */}
//         <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
//         {this.props.options.map(option => (
//           <Option key={option} optionText={option} />
//         ))}
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // this.setState(()=>{
    //     return{
    //       //error:error
    //       error
    //     }
    // });
    this.setState(() => ({ error }));
    if(!error){
      e.target.elements.option.value='';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>ADD</button>
        </form>
      </div>
    );
  }
}

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <ol>
//           <li>{this.props.optionText}</li>
//         </ol>
//       </div>
//     );
//   }
// }
// passing default value
//ReactDOM.render(<IndecisionApp options = {['one','tow ','three']}/>, document.getElementById("app"));
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// const jsx=(
//     <div>
//         <h1>Title</h1>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );
// ReactDOM.render(jsx,document.getElementById('app'));

/* error in my code

     always forget this while calling the event for eg{ this.handleevent }

     forget the s in elements
     e.target.element.option.value
    */

//method binding
//this.props.options.bind({name:che});

// const obj={
//     name:'chetan',
//     getname(){
//         return this.name;
//     }
// }
// console.log(obj.getname());
// //const myName= obj.getname; // this causes error cannot read the proprerty of undefined
// //console.log(myName());

// //soln to the problem is bind the method
// const myName= obj.getname.bind(obj);
// //or
// const myName1= obj.getname.bind({name:'mahajan'});

// console.log(myName());
// console.log(myName1());

import React, {
  createContext,
  lazy,
  Suspense,
  PureComponent,
  memo,
  useState
} from "react";
import "./App.css";

//通过import倒入组件
// const About=lazy(()=>import(/*webpackChunkName:'about'*/'./About.jsx')) //返回是一个react组件

// //创建context
// const BatteryContext = createContext();
// //()传入一个默认值，如果找不到provider就会使用默认值
// const OnlineContext = createContext();

// //消费者
// class Leaf extends React.Component {
//   static contextType = BatteryContext

//   render() {
//     const battery = this.context

//     return (
//        <h1>{battery}</h1>
//       // <BatteryContext.Consumer>
//       //   {(battery) => <h1>{battery}</h1>}
//       // </BatteryContext.Consumer>
//     );
//   }
// }
// //中间元素
// class Middle extends React.Component {
//   render() {
//     return <Leaf />;
//   }
// }
// //父亲元素
// class App extends React.Component {
//   state = {
//     battery: 60,
//     online: false,
//   };

//   render() {
//     const { battery, online } = this.state;

//     return (
//       <BatteryContext.Provider value={battery}>
//         <OnlineContext.Provider value={online}>
//           <button
//             onClick={() => {
//               this.setState({ battery: this.state.battery + 1 });
//             }}
//           >
//             press
//           </button>
//           <button
//             onClick={() => {
//               this.setState({ online: !this.state.online });
//             }}
//           >
//             switch
//           </button>
//           <Middle />
//         </OnlineContext.Provider>
//       </BatteryContext.Provider>
//     );
//   }
// }

// class App extends React.Component{
//   state = {
//     hasError:false
//   }
//   //错误边界 ErrorBoundary 捕获异步导入组件的错误
//   //使用了 componentDidCatch
//   // componentDidCatch(){
//   //   this.setState({hasError:true})
//   // }

//   static getDerivedStateFromError() {
//     return {
//       hasError:true
//     }
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div>Error</div>
//     }
//     return (
//       <div>
//         <Suspense fallback={<div>loading</div>}>
//           <About/>
//         </Suspense>
//       </div>
//     )
//   }
// }

// class Foo extends React.PureComponent {
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   if (nextProps.name === this.props.name) {
//   //     return false;
//   //   }
//   //   return true;
//   // }

//   render() {
//     console.log("Foo render");
//     return null;
//   }
// }
//跟class组件的pureComponet一样
// const Foo=memo(function Foo() {
//   console.log('foo')
//   return null
// })
// class App extends React.Component {
//   state = {
//     count: 0,
//   };

//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           add
//         </button>
//         <Foo name="Mike" />
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   state = {
//     count: 0,
//   };

//   render() {
//     const { count } = this.state;

//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           click({count})
//         </button>
//       </div>
//     );
//   }
// }

function App() {
  const [state, setState] = useState(0)
  //usestae方法返回一个具有2个成员的数组
  return (
    <div>
       <button
           onClick={() => {
            setState(state+1)
          }}
        >
          click({state})
          </button>
    </div>
  )
}

export default App;

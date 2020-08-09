import React, { createContext } from "react";
import "./App.css";

//创建context
const BatteryContext = createContext();
//()传入一个默认值，如果找不到provider就会使用默认值
const OnlineContext = createContext();

//消费者
class Leaf extends React.Component {
  render() {
    return (
      <BatteryContext.Consumer>
        {(battery) => (
          <OnlineContext.Consumer>
            {(online) => (
              <h1>
                {battery},{String(online)}
              </h1>
            )}
          </OnlineContext.Consumer>
        )}
      </BatteryContext.Consumer>
    );
  }
}
//中间元素
class Middle extends React.Component {
  render() {
    return <Leaf />;
  }
}
//父亲元素
class App extends React.Component {
  state = {
    battery: 60,
    online: false,
  };

  render() {
    const { battery, online } = this.state;

    return (
      <BatteryContext.Provider value={battery}>
        <OnlineContext.Provider value={online}>
          <button
            onClick={() => {
              this.setState({ battery: this.state.battery + 1 });
            }}
          >
            press
          </button>
          <button
            onClick={() => {
              this.setState({ online: !this.state.online });
            }}
          >
            switch
          </button>
          <Middle />
        </OnlineContext.Provider>
      </BatteryContext.Provider>
    );
  }
}

export default App;

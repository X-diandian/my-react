import  React from 'react' //引入依赖
import BusinessCard from './compoents/BusinessCard'
class Welcome extends  React.Component{  //继承组件
    render() {

        const  sdf=false;
        return (
            <div className="App">
                <BusinessCard />
                <h1>dfd{'fff'}{"32424"}+++{3+5}</h1>
                <h1 id="user">[1,2,3]</h1>
                {[12,3434]}
                {sdf?<p>true</p>:<p>false</p>}

            </div>
        )
    }
}

export default Welcome;
// export
// extends
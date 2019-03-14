import React from 'react'

class TimeCom extends React.Component{

    constructor(props) {
        super(props);
        this.state={   //state用来设置
            date:new Date()
        }
    }


    componentDidMount() {
        this.timer=setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)

        

    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {

            return (

                <div>
                    <h1>{this.state.date.toLocaleTimeString()}</h1>
                </div>

            )
    }
}

export default TimeCom



























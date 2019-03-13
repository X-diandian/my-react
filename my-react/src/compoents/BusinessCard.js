import  React from 'react'

class BusinessCard extends React.Component {

    constructor(props){
        super(props);
        this.state={
            likes:0
        }
        // this.likesinst=this.likesinst.bind(this);//绑定回调函数
    }
    likesinst(){
        // console.log(this)
        this.setState({
            likes:++this.state.likes
        })

    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.likesinst()}}>{this.state.likes}赞</button>
            </div>
        )

    }
}


export default BusinessCard;
// export default BusinessCard;
// export default Welcome;
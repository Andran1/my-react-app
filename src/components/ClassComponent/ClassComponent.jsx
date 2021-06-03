import React, { PureComponent } from 'react'

class ClassComponent extends PureComponent {
    state = {
            name:'',


    }

    componentDidMount(){
        console.log('Mount');

        
    }


    componentDidUpdate(){
        console.log("update");
    }

    componentWillUnmount(){
        console.log('unMount');
    }

    render() {
        return (

            <div>
                <input type="text" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})} />
            </div>
            
        )
    }
}

export default ClassComponent
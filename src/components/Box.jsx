import React from 'react';






export class Box extends React.Component{
    render(){
        return(
            <div className="box col-sm-3 col-6">
                <span style={{fontSize:'100px', color:this.props.color}} className="material-icons">
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
        </div>
        )
    }
}

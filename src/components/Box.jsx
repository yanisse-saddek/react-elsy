import React from 'react';

export class Box extends React.Component{
    constructor(props){
        super()
        this.inputRangeFunc = this.inputRangeFunc.bind(this)
    }
    inputRangeFunc = ()=>{
    if(this.props.name !== "water"){
        return <input step={this.props.name === "steps"? 1000: null}  name={this.props.name} type="range" min={this.props.min} max={this.props.max} value={this.props.valeur} onInput={this.props.onChange}></input>
    }

    }
    render(){
        return(
            <div className="box col-sm-3 col-6">
                <span style={{fontSize:'100px', color:this.props.color}} className="material-icons">
                    {this.props.icon}
                </span> 
                <p>{this.props.valeur} {this.props.unit}</p>
                {this.inputRangeFunc()}
        </div>
        )
    }
}

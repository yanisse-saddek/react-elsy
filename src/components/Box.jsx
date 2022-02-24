import React from 'react';

export class Box extends React.Component{
    constructor(props){
        super()
        this.inputRangeFunc = this.inputRangeFunc.bind(this)
    }
    inputRangeFunc = ()=>{
        if(this.props.icon == "favorite"){
            return <input name="heart" type="range" min={this.props.min} max={this.props.max} value={this.props.valeur} onInput={this.props.onChange}></input>
        }
        if(this.props.icon == "directions_walk"){
            return <input name="directions_walk" type="range" min={this.props.min} max={this.props.max} value={this.props.valeur} onInput={this.props.onChange}></input>
        }
        if(this.props.icon == "wb_sunny"){
            return <input name="temperature" type="range" min={this.props.min} max={this.props.max} value={this.props.valeur} onInput={this.props.onChange}></input>
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

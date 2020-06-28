import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

                <button className="btn btn-secondary m-2"
                    onClick={() => this.props.onIncrement(this.props.counter)}>+
                </button>
                <button className="btn btn-secondary m-2"
                    onClick={() => this.props.onDecrement(this.props.counter)}>-
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">x
                </button>
            </div >
        )
    }


    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}


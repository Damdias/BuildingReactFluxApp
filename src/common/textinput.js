import React from "react";

export default class Input extends React.Component {

    render() {
        let wrapperClass = 'form-grop';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }
        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input type="text"
                        name={this.props.name}
                        className="form-control"
                        placeholder={this.props.placeholder}
                        ref={this.props.name}
                        onChange={this.props.onChange}
                    />
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
}

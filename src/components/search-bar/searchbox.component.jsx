import { Component } from "react";

class Searchbox extends Component {
    render() {
        return (
            <div>
                <input
                    className={this.props.className}
                    type='input'
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangeHandler}
                />
            </div>
        )
    }
}

export default Searchbox;

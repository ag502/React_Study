import React, {Component, createRef} from 'react';
import CustomTextInput from "./CustomTextInput";

class AutoFocusTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = createRef()
    }

    componentDidMount() {
        this.textInput.current.focusTextInput()
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput}/>
        )
    }
}

export default AutoFocusTextInput
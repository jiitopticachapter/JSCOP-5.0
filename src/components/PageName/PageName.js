import "./PageName.css"
import React, {Component} from 'react'

class PageName extends Component {
    render() {
        return (
            <div className="page_body">
                <div className="page">
                    <div className="page_heading">
                        <h5>JSCOP 2023 presents</h5>
                        <h1>{this.props.page_heading}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageName
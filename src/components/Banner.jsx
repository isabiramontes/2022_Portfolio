import React from 'react'
import Banner from './Banner'

export default class Designs extends React.Component {

    targetRef = React.createRef();

    componentDidMount = () => {

        if (this.props.location.state) {
            this.scrollToTarget()

        }
    }

    scrollToTarget = () => {
        setTimeout(() => {
            this.targetRef.scrollIntoView({
                behavior: 'smooth'
            })
        }, 500);
    }

    render() {
        return (
            <>
                <Banner scrollToTarget={this.scrollToTarget} />
                <div>
               // some content
                </div>
                <div>
               // some other content
                </div>
                <div ref={ref => { this.targetRef = ref }}>
               // the content you want the link the scroll to
                </div>
            </>
        )
    }
}
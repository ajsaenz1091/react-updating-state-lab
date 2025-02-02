// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor(){
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }

    handleBitrate = () => {
        this.setState(previousState => {
            return {
                settings: {...previousState.settings,bitrate: 12}
            }
        })
    }

    // handleResolution = () => {
    //     this.setState({
    //         settings: Object.assign({},this.state.settings, {
    //             video: Object.assign({}, this.state.settings.video, {
    //                 resolution: '720p'
    //             })
    //         })
    // })
    // }
    handleResolution = () => {
        this.setState(previousState => {
            return {
                settings: {...previousState.settings,video: {...previousState.settings.video, resolution: '720p' }}
            }
        })
    }

    render(){
        return(
            <div>
                <button 
                className="bitrate"
                onClick={this.handleBitrate}>{`${this.state.settings.bitrate}`}</button>
                <button 
                className="resolution"
                onClick={this.handleResolution}>{`${this.state.settings.video.resolution}`}</button>
            </div>
        )
    }
}

export default YouTubeDebugger;
import React from 'react'
import { Link} from 'react-router-dom'
import {Row, Col, Container, Button} from 'react-bootstrap'
import {bindActionCreators} from "redux"
import {getDarkMode, ModeAction, getRtlMode, DirAction} from '../../../store/mode/mode'
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        darkMode: getDarkMode(state),
        rtlMode: getRtlMode(state),
    };
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            ModeAction,
            DirAction,
        },
        dispatch
    )
})

const Footer = (props) => {
    var  dark = props.darkMode
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('dark');
    if (mode !== null) {
      document.body.classList=''
      dark = false
    switch (mode) {
        case "true":
            document.body.classList='dark'
            dark = true
        break;
        case "false":
             document.body.classList=''
             dark = false
        break;
        default:
             document.body.classList=''
           dark = false
            break;
    }
    }
    return (
            <>
                <div className="iq-float-menu">
                    <input type="checkbox" className="iq-float-menu-open" name="menu-open" id="menu-open" />
                    <label className="iq-float-menu-open-button" htmlFor="menu-open">
                        <span className="lines line-1"></span>
                        <span className="lines line-2"></span>
                        <span className="lines line-3"></span>
                    </label>
                        <Button bsPrefix="iq-float-menu-item bg-info" title="Dyslexia Friendly"><i className="ri-character-recognition-line"></i></Button>
                        <Button bsPrefix="iq-float-menu-item bg-danger"  title="Dark Mode" onClick={() => {props.ModeAction(!props.darkMode)}} ><i className={`${props.darkMode ? 'ri-sun-line':'ri-moon-clear-line'}` } checked={props.darkMode || dark} data-active={props.darkMode? 'true' : 'false' || dark ? 'true' : 'false'} ></i></Button>
                        <Button bsPrefix="iq-float-menu-item bg-warning" title="Text-to-Speech"><i className="ri-volume-down-line"></i></Button> 
                </div>
            </>
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
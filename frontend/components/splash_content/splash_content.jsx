import React from 'react';
import { Link } from 'react-router-dom';

const SplashContent = () => {
    return (
        <div className="splash-content">
            <div className="value-prop">
                <h1>Leverage the power of notes</h1>
                <h5>Levernote helps you do more with less force</h5>
            </div>
            <div className="preview-content">
                <img className="preview-image" src={window.splashImage} />
                <div className="splash-texts">
                    <div className="splash-text">
                        <h3>WORK ANYWHERE</h3>
                        <p>Log in to your levernote account from any web browser</p>
                    </div>
                    <div className="splash-text">
                        <h3>ORGANIZE YOUR WORK</h3>
                        <p>Categorize your notes into notebooks and add tags</p>
                    </div>
                    <div className="splash-text">
                        <h3>EXPRESS YOURSELF</h3>
                        <p>Add style to your notes with rich text editing from React-Quill</p>
                    </div>
                    <div className="splash-text">
                        <h3>FIND WHAT YOU NEED</h3>
                        <p>Easily sort through your content with tag filtering</p>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="splash-footer">
                <div className="splash-more">
                    <h3>About</h3>
                    <ul>
                        <li>Philip Lowe</li>
                        <li><a href="mailto: philip.lowe94@gmail.com">philip.lowe94@gmail.com</a></li>
                        <li>516-282-5752</li>
                    </ul>
                </div>
                <div className="splash-more">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="https://github.com/philowe94/" target="_blank">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/philip-lowe-274b9a9a/" target="_blank">Linkedin</a></li>
                        <li><a href="https://philowe94.github.io/portfolio/" target="_blank">Personal Site</a></li>
                    </ul>
                </div>
                <div className="splash-more">
                    <h3>More Projects</h3>
                    <ul>
                        <li><a href="https://netzero-application.herokuapp.com/" target="_blank">Net Zero</a></li>
                        <li><a href="https://philowe94.github.io/alien-game/" target="_blank">Alien Game</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default SplashContent;
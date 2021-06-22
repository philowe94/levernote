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
        </div>
    )
}

export default SplashContent;
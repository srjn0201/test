import React from "react";  
import './SkillCard.css';

const SkillCard = () => {
    return (
        <div className="mainskillcardbody">
            <div className="skills_heading" style={{ textAlign: 'center' }}> 
                <div className="skilltextbody">
                    <h1> Skills </h1>
                    <p style={{lineHeight: '1.2'}}>I am a graduate of Internation Finance. While studying finance i got interest in applications of computer technologies used in finance. And continue working towords that interest.<br/>
                    Currently I am studying Computer applications and Data Science and trying to implement that in the field of finance. <br/>
                    Most of my skills are in financial machine learning but apart from that i also aquired skills of web development and backend development.
                    </p>
                </div>
            </div>
            <div className="childskillcardbody" >
                <div className="singleskillcardbody">
                    <h2>Data analysis</h2>
                    <div className="cardafterhover">
                        {/* <h2>Python</h2>
                        <p>I aquired many knowledge in python for data analysis</p>
                        <button className="btn">Details</button> */}
                        <img src='./test.jpg' alt="Avatar" />
                    </div>
                </div>
                <div className="singleskillcardbody">
                    <h2>python</h2>
                    <div className="cardafterhover">
                        {/* <h2>Python</h2>
                        <p>I aquired many knowledge in python for data analysis</p>
                        <button className="btn">Details</button> */}
                        <img src='./test.jpg' alt="Avatar" />
                    </div>
                </div>
                <div className="singleskillcardbody">
                    <h2>HTML & HTMX</h2>
                    <div className="cardafterhover">
                        {/* <h2>Python</h2>
                        <p>I aquired many knowledge in python for data analysis</p>
                        <button className="btn">Details</button> */}
                        <img src='./test.jpg' alt="Avatar" />
                    </div>
                </div>
                <div className="singleskillcardbody">
                    <h2>FastAPI</h2>
                    <div className="cardafterhover">
                        {/* <h2>Python</h2>
                        <p>I aquired many knowledge in python for data analysis</p>
                        <button className="btn">Details</button> */}
                        <img src='./test.jpg' alt="Avatar" />
                    </div>
                </div>  
                <div className="singleskillcardbody">
                    <h2>React.js</h2>
                    <div className="cardafterhover">
                        {/* <h2>Python</h2>
                        <p>I aquired many knowledge in python for data analysis</p>
                        <button className="btn">Details</button> */}
                        <img src='./test.jpg' alt="Avatar" />
                    </div>
                </div>
                <div className="singleskillcardbody">
                    <h2>Linux</h2>
                    <div className="cardafterhover">
                        {/* <h2>Python</h2>
                        <p>I aquired many knowledge in python for data analysis</p>
                        <button className="btn">Details</button> */}
                        <img src='./test.jpg' alt="Avatar" />
                    </div>
                </div>
                <div className="singleskillcardbody">
                    <h2>SQLite</h2>
                    <div className="cardafterhover">
                        {/* <h2>Python</h2>
                        <p>I aquired many knowledge in python for data analysis</p>
                        <button className="btn">Details</button> */}
                        <img src='./test.jpg' alt="Avatar" />
                    </div>
                </div>
                <div className="singleskillcardbody">
                    <h2>SkLearn</h2>
                    <div className="cardafterhover">
                        {/* <h2>Python</h2>
                        <p>I aquired many knowledge in python for data analysis</p>
                        <button className="btn">Details</button> */}
                        <img src='./test.jpg' alt="Avatar" />
                    </div>
                </div>               

            </div>
        </div>
    );
}



export default SkillCard;


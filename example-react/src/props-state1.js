import React, { Component } from 'react';

class PropState extends Component {
    state = {
        selectedLanguage: 'All'
    }

    updateLanguage = (lang) => {
        console.log('clicked : ', lang)

        this.setState({
            selectedLanguage: lang
        })
    }
    render() {
        const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"]
        return (
            <div>
                <ul>
                    {languages.map((lang) => (
                        <li style={lang === this.state.selectedLanguage ? { color: '#27db33' } : null}
                            key={lang} onClick={() => this.updateLanguage(lang)}>{lang}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PropState;
import React, { Component } from 'react';

function Languages(props) {

    const { languages, selectedLanguage, updateLanguage } = props;

    return (
        <div>
            <ul>
                {languages.map((lang) => (
                    <li style={lang === selectedLanguage ? { color: '#27db33' } : null}
                        key={lang} onClick={() => updateLanguage(lang)}>{lang}</li>
                ))}
            </ul>
        </div>
    );
}


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
        //console.log(subject.map((e)=>e))
        return (
            <div>
                <Languages languages={languages}
                    selectedLanguage={this.state.selectedLanguage}
                    updateLanguage={this.updateLanguage}></Languages>
            </div>
        );
    }
}

export default PropState;
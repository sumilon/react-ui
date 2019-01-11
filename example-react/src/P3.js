import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetchPopularRepos from './utils/api'
import CircularProgress from '@material-ui/core/CircularProgress';

function Languages(props) {

    const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"]

    const { selectedLanguage, updateLanguage } = props;

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

function RepoGrid(props) {
    const { repos } = props
    console.log(props)
    return (
        <ui className='popular-list'>
            {repos.map(({ name, stargazers_count, owner, html_url }, index)=>
            (<li key={name} className='popular-item'>
                <div className='popular-rank'>#{index + 1}</div>
                <ui className='space-list-items'>
                    <li>
                        <img
                            className='avatar'
                            src={owner.avatar_url}
                            alt={'Avatar for ' + owner.login}
                        />
                    </li>
                    <li><a href={html_url}>{name}</a></li>
                    <li>@{owner.login}</li>
                    <li>{stargazers_count} stars</li>
                </ui>
            </li>
            ))}
            
        </ui>
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired,
}

class P3 extends Component {
    state = {
        selectedLanguage: 'All',
        repos: null
    }

    componentDidMount = () => {
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage = (lang) => {
        this.setState(() => {
            return {
                selectedLanguage: lang,
                repos: null
            }
        })

        fetchPopularRepos(lang)

            .then(function (repos) {
                console.log(repos)
                this.setState(function () {
                    return {
                        repos: repos
                    }
                });
            }.bind(this));
    }



    render() {
        return (
            <div>
                <Languages
                    selectedLanguage={this.state.selectedLanguage}
                    updateLanguage={this.updateLanguage}></Languages>
                {!this.state.repos
                    ? <p>Loading...</p>
                    : <RepoGrid
                        repos={this.state.repos}
                    />
                }


            </div>
        );
    }
}

export default P3;
import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';
import peaks from '../peaks.json';

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // init this to peaks, adding a property of
            // lower case names so that they don't have to 
            // toLowerCase doesn't have to be looped through
            // all people every time the search value is changed
            peaksLcName: peaks.map(person => ({
                    name: person.name,
                    description: person.description,
                    actor: person.actor,
                    nameLc: person.name.toLowerCase()
                })
            ),
            // init to all characters, will be reset on every searchString change
            characters: peaks
        }
    }
    const 
    findCharacters(findString) {
        // assume that the findstring is empty, fill w/ all characters
        let displayCharacters = this.state.peaksLcName;

        
        // !! is used to convert findString.trim() into a boolean,
        // false if an empty string, true if not empty
        if (!!findString.trim()) {
            // init to be the lower case to avoid running toLowerCase() for every object
            const findStrToLower = findString.trim().toLowerCase();
            displayCharacters = displayCharacters.filter(obj => obj.nameLc.includes(findStrToLower));
        }

        this.setState({
            characters: displayCharacters
        });
    }

    render() {
        return (
            <div className="live-search">
                <SearchForm onChange={value => this.findCharacters(value)} />
                <CharacterCount count={this.state.characters.length} />
                <CharacterList characters={this.state.characters} />
            </div>
        )
    };
}

import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';
import peaks from '../peaks.json';

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: peaks
        }
    }

    findCharacters(findString) {
        //console.log(!!findString.trim());
        let displayCharacters = peaks;
        // !! is used to convert findString.trim() into a boolean,
        // false if an empty string, true if not empty
        if (!!findString.trim()) {
            const findStrToLower = findString.trim().toLowerCase();
            // displayCharacters.filter(character => character.name.indexOf(findString) !== -1);
            displayCharacters = displayCharacters.filter(obj => obj.name.toLowerCase().includes(findStrToLower));
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

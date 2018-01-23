import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter: '',
      countries: []
    };
  }

  componentWillMount(){
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({countries: res.data}))
      .catch(err => console.log(err));
  }

  handleSearch = (event) => {
    this.setState({ filter: event.target.value });
  }

  selectCountry = (name) => {
    return () => this.setState({filter: name});
  }

  filterCountries = (countries=[], filter='') => (
    countries.filter(
      country => country.name.toLowerCase().includes(filter.toLowerCase())
    )
  )

  render() {
    const { filter, countries } = this.state;
    const filteredCountries = this.filterCountries(countries, filter);

    let content = <p>too many matches, specify another filter</p>;
    if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      const imageStyle = {maxWidth: '300px', border: 'solid 1px grey'};
      content = 
        <div>
          <h1>{country.name}</h1>
          <p>capital: {country.capital}</p>
          <p>population: {country.population}</p>
          <img style={imageStyle} src={country.flag} alt={"Flag of " + country.name}/>
        </div>
    } else if (filteredCountries.length <= 10){
      content = filteredCountries.map(country => 
        <div key={country.name} onClick={this.selectCountry(country.name)}>{country.name}</div>
      )
    }

    return (
      <div>
        <input onChange={this.handleSearch} value={filter} />
        { content }
      </div>
    );
  }
}

export default App;

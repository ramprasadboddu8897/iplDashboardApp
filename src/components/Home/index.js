// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: {}, isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamsList: updatedData, isLoading: false})
  }

  // Render Teams List
  renderTeamsList = () => {
    const {teamsList} = this.state
    return (
      <ul className="teams-list-container">
        {teamsList.map(eachItem => (
          <TeamCard key={eachItem.id} teamDetails={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="ipl-logo-heading-container">
          <img
            alt="ipl logo"
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>

        {/* Teams Container */}
        <div className="teams-container">
          {isLoading ? (
            <div testid="loader" className="loader-container">
              <Loader type="Oval" color="#ffffff" height={50} />
            </div>
          ) : (
            this.renderTeamsList()
          )}
        </div>
      </div>
    )
  }
}

export default Home

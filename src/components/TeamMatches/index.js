// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamMatches: {},
    latestMatchesDetails: {},
    recentMatchesDetails: {},
    isLoading: true,
    team: '',
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedTeam = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

    const updatedLatestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const updatedRecentMatches = data.recent_matches.map(eachValue => ({
      id: eachValue.id,
      competingTeam: eachValue.competing_team,
      competingTeamLogo: eachValue.competing_team_logo,
      result: eachValue.result,
      matchStatus: eachValue.match_status,
    }))

    this.setState({
      teamMatches: updatedTeam,
      latestMatchesDetails: updatedLatestMatchDetails,
      team: id,
      recentMatchesDetails: updatedRecentMatches,
      isLoading: false,
    })
  }

  render() {
    const {
      teamMatches,
      latestMatchesDetails,
      recentMatchesDetails,
      isLoading,
      team,
    } = this.state
    const {teamBannerUrl} = teamMatches
    console.log(teamMatches)

    return (
      <div className={`team-matches-container ${team}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="content-container">
            <img
              alt="team banner"
              className="team-banner-image"
              src={teamBannerUrl}
            />
            {/* Team Matches Container */}
            <div className="team-matches-container">
              <p className="team-matches-heading">Team Matches</p>
              <div className="latest-matches-container">
                <LatestMatch
                  key={latestMatchesDetails.id}
                  latestMatchesDetails={latestMatchesDetails}
                />
                {/* Match Card    */}
                <ul className="recent-list">
                  {recentMatchesDetails.map(eachValue => (
                    <MatchCard key={eachValue.id} matchDetails={eachValue} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches

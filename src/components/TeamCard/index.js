// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {id, name, teamImageUrl} = teamDetails

    return (
      <li className="team-card-item">
        <Link className="link-item" to={`/team-matches/${id}`}>
          <img alt={name} className="team-image" src={teamImageUrl} />
          <p className="team-name">{name}</p>
        </Link>
      </li>
    )
  }
}

export default TeamCard

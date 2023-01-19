// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchesDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,

    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchesDetails

  return (
    <div className="latest-matches-card-container">
      <div className="venue-container">
        <div className="team-h-container">
          <div>
            <p className="team-heading">{competingTeam}</p>
            <p className="text">{date}</p>
            <p className="text">{venue}</p>
            <p className="text">{result}</p>
          </div>
        </div>
        <div className="image-container">
          <div>
            <img
              alt={`latest match ${competingTeam}`}
              className="team-logo"
              src={competingTeamLogo}
            />
          </div>
        </div>
      </div>
      <hr className="line" />
      <div>
        <p className="text big-text">First Innings</p>
        <p className="text">{firstInnings}</p>
        <p className="text big-text">Second Innings</p>
        <p className="text">{secondInnings}</p>
        <p className="text big-text">Man of the Match</p>
        <p className="text">{manOfTheMatch}</p>
        <p className="text big-text">Umpires</p>
        <p className="text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

import React from 'react'


function Subjects() {
  return (
    <div className="card d-flex justify-content-center" style={{ width: "18rem" ,height:"28rem" }}>
  <div className="card-body">
    <h5 className="card-title d-flex justify-content-center">Voting Subject</h5>
    <h6 className="card-subtitle mt-3 mb-2 text-muted d-flex justify-content-center">Local level Election</h6>
    <p className="card-text">
      Contest your vote for this local level election.
      Steps:
      <br></br>
      <ol>
        <li>Click "Vote" to cast your vote</li>
        <li>Press "Logout"</li>
      </ol>
    </p>
    {/* <a href="#" className="card-link">
      Card link
    </a>
    <a href="#" className="card-link">
      Another link
    </a> */}
  </div>
</div>

  )
}

export default Subjects
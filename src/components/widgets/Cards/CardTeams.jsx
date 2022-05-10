import React from "react";
import "./Card.css";
import styled from "styled-components";
import DepartmentsImg from "../../assets/departments.png";
//import ThemedButton from "./Button";

const Align = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardTeams = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h6>
            Departments<span style={{ color: "#ea4c6e" }}>.</span>
          </h6>
          <p>Reach out and learn more about other areas around the business</p>
          <div className="card-team">
            <div className="departments">
              <ul className="team-list">
                <li>
                  <a href="https://audioagent365.sharepoint.com/sites/BusinessApplicationTeam/SitePages/How-to-use-the-Business-Apps-Jira-project.aspx">
                    Tech
                  </a>
                </li>
                <li>
                  <a>Sales</a>
                </li>
                <li>
                  <a>Sales</a>
                </li>
                <li>
                  <a>Design &amp; Product</a>
                </li>
                <li>
                  <a>Finance</a>
                </li>
                <li>
                  <a>Operations</a>
                </li>
                <li>
                  <a>Pro Network</a>
                </li>
                <li>
                  <a>HR</a>
                </li>
              </ul>
            </div>
            <img src={DepartmentsImg} className="team-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTeams;

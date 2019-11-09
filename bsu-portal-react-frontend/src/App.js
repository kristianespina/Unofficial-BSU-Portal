import React, { useState } from 'react';
import { ReactComponent as RocketSVG } from './Assets/rocket.svg'

import './App.css';

import { ApolloProvider } from '@apollo/react-hooks';
import graphQLClient from './API/client';

import Grades from './components/Grades'
import Name from './components/Name'



function App() {
  const [srcode, setSRCode] = useState("");
  const [schoolyear, setSchoolYear] = useState("2019-2020");
  const [semester, setSemester] = useState("FIRST");
  const onSRCodeChange = (e) => {
    setSRCode(e.target.value)
  }

  return (
    <ApolloProvider client={graphQLClient}>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered is-vcentered">
              <div className="column is-one-half">
                <div className="columns is-centerd is-vcentered">
                  <div className="column is-one-quarter">
                    <RocketSVG />
                    </div>
                  <div className="column"><h1 className="title is-1">
                  Hi <Name srcode={srcode}/>
                </h1>
                <h2 className="subtitle is-4">Tell me your SR Code and I'll tell you your grades</h2>

                <div className="columns">
                  <div className="column is-half">
                          <div className="field">
                            <p className="control has-icons-left has-icons-right">
                              <input className="input is-rounded" type="text" placeholder="Enter your SR Code" value={srcode} onChange={onSRCodeChange}/>
                              <span className="icon is-small is-left">
                                <i className="fas fa-user-tag"></i>
                              </span>
                              <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                              </span>
                            </p>
                          </div>
                  </div>
                  <div className="column has-text-centered">
                          <div className="select is-rounded is-fullwidth">
                            <select value={schoolyear} onChange={(e) => setSchoolYear(e.target.value)}>
                              <option>2019-2020</option>
                              <option>2018-2019</option>
                              <option>2017-2018</option>
                              <option>2016-2017</option>
                              <option>2015-2016</option>
                              <option>2014-2015</option>
                              <option>2013-2014</option>
                              <option>2012-2013</option>
                              <option>2011-2012</option>
                              <option>2010-2011</option>
                            </select>
                          </div>
                  </div>
                  <div className="column has-text-centered">
                          <div className="select is-rounded is-fullwidth">
                            <select value={semester} onChange={(e) => setSemester(e.target.value)}>
                              <option>FIRST</option>
                              <option>SECOND</option>
                              <option>SUMMER</option>
                              <option>SUMMER2</option>
                            </select>
                          </div>
                  </div>
                </div>

                <Grades srcode={srcode} schoolyear={schoolyear} semester={semester}/></div>
                </div>
                


              </div>
            </div>
        </div>
      </div>
    </section>
    </ApolloProvider>
  );
}

export default App;

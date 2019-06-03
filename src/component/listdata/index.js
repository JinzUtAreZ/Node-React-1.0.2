import React, { Fragment } from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import PerData from './eachdata';

export default ({ match: { url }, datalist }) =>
  <Fragment>
    <ul>
      {datalist.map(({ id, name }) =>
        <li key={id}>
          <Link to={`${url}/${id}`}>{name}</Link>
        </li>
      )}
    </ul>
        <Route exact path={url} render={() => <h3>Please Select a writer</h3>}/>
        <Route path={`${url}/:writerId`} render={
            props => {
                const writer = datalist.find(writer=> writer.id === props.match.params.writerId )
                if(!writer){
                  return <Redirect to="/404"/>
                  // use Redirect function by react
                }
                return <PerData {...props} {...writer}/>
            }
        }/>
        
    </Fragment>
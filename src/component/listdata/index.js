import React, { Fragment } from 'react';
import {Link, Route} from 'react-router-dom';
import Writer from './eachdata'

export default ({ match: { url }, datalist }) =>
  <Fragment>
    <ul>
      {datalist.map(({ id, name }) =>
        <li key={id}>
          <Link to={`${url}/${id}`}>{name}</Link>
        </li>
      )}
    </ul>
        
        <Route path={`${url}/:writerId`} render={
            ({ match }) => <Writer {...datalist.find(writer=> writer.id === match.params.id)}/>
        }/>
    </Fragment>
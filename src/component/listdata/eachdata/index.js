import React, { Fragment } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Text from './text';

export default ({ match: {url}, name, description, image, texts}) =>
<Fragment>
    <div>
    
    <h1>{name}</h1>
    <img src={image} alt={name} style={{maxWidth:300,maxHeight:300}}/>
    <p>{description}</p>

    
    </div>
    <ul>
        {texts.map(({ id, title}) =>
            <li>
                <Link to={`${url}/texts/${id}`}>{title}</Link>
            </li> 
        )}
    </ul>

    <Route path={`${url}/texts/:textId`} render={ 
        props => {
            const text = texts.find(({ id }) => id === props.match.param.textId)
            if(!text){
                return <Redirect to="/404"/>
            }
            return <Text {...text} />
        }
    }/>

</Fragment>
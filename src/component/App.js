import React, { Fragment,Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import BSTable from './BootStrapTable';
import Listdata from './listdata';
import NotFound from '../component/Error';

class App extends Component {
    constructor(props) {
      super(props);
       this.state = {
        jsonresults: [],
        error: null
      };
    }
    
    async componentDidMount() {
      const jsonresults = await (await fetch('http://localhost:3004/writers?_embed=texts')).json()
      // 'http://localhost:3004/writers   // first level route
      this.setState({ jsonresults })
    }

    // componentDidMount() {
    //   fetch(`http://localhost:3004/writers`) // temp server in sample.json
    //   //fetch(`/api/assetdata`)
    //   //fetch(`/api/dataload`) //live server to
    //   //fetch(`https://jsonplaceholder.typicode.com/users`)
    //     .then(response => { //res.json())
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         throw new Error('Something went wrong ...');
    //       }
    //     })
    //     .then(json => this.setState({ 
    //                     items: json.recordset
    //               }))
    //     .catch(error => this.setState({ 
    //         error }))
    // }
 
    render() {
      //console.log(this.state);
      const { jsonresults, error } = this.state;
      if (error) {
        return <p>{error.message}</p>;
      }

      return (
        <div className="App">
            {/* <ul>
                {items.map(item =>(
                    <li key={item.JOid}>
                      {item.AssetDesc} --- {item.ModelNo}
                      </li>
                ))};
            </ul> */}
            <BrowserRouter>
            <Fragment>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/writers">Writers</Link></li>
            </ul>
            <hr/>
            <Switch>
              <Route exact path="/" render={() => <div>Home</div>} />
              <Route path="/writers" render={
                  props => <Listdata {...props} datalist={jsonresults} />
                  } />
              <Route component={NotFound}></Route> 
              {/* use predefined folder function  */}
            </Switch>
            </Fragment>
            </BrowserRouter>
        </div>
      );
    }
  }
  
  export default App;
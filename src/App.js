import logo from './logo.svg';
import './App.css';
import client from './ApolloClient';
import {gql} from "@apollo/client";
function App({testHeaders}) {
  console.log(testHeaders);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learning React js
        </p>
      </header>
    </div>
  );
}

export async function getStaticProperties() {
  const { data : testHeaders } = await client
    .query({
      query: gql`
      {
        testHeaders {
          slugtest
          title
          logo {
            id
          }
        }
      }      
    `
    })
    .then(result => console.log(result));
  console.log(testHeaders);
  return {
    props : {
        testHeaders
    }
  }
}

export default App;

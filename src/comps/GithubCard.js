import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { AutoForm } from '../store';

const GithubCard = () => {
  const { visible, result } = useContext(AutoForm.StateContext);
  const dispatch = useContext(AutoForm.DispatchContext);
  return (
    <Card>
      <Card.Body>
        {
          visible ? (
            result.hasOwnProperty('message') ? (<>
              <Card.Title>{result.message}</Card.Title>
            </>) : (<>
              <Card.Img className="profile-img border border-dark" variant="top" src={result.avatar_url} />
              <Card.Title>{result.name}</Card.Title>
              <Card.Subtitle>{result.login}</Card.Subtitle>
              <Card.Text>{result.bio}</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <svg className="mr-2" height="16" viewBox="0 0 16 16" version="1.1" width="16"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                  Public Repos: {result.public_repos}
                  </ListGroup.Item>
                <ListGroup.Item>
                  <svg className="mr-2" height="16" viewBox="0 0 16 16" version="1.1" width="16"><path fillRule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>
                  Followers: {result.followers}
                </ListGroup.Item>
              </ListGroup>
            </>)
          ) : ''
        }
        <div className="text-center">
          <Button className="mt-2 mb-1" variant="secondary" type="button" onClick={() => dispatch({ type: AutoForm.TOGGLE })}>
            {visible ? 'Hide' : 'Show'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GithubCard;
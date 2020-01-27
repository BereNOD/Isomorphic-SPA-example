/* @flow strict */

import * as React from 'react';
import Navigation from './../../components/Navigation.jsx';
import Title from './../../components/Title.jsx';
import { Link } from 'react-router-dom';
import {
  type RecordType,
  type ListType
} from './types.js';

type PropsType = {};

class ToDo extends React.Component<PropsType, StateType> {
  state = {
    list: []
  };

  componentDidMount = () => {
    fetch('/to-do', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
      .then((response: Response): ListType => response.json())
      .then((list: list) => {
        this.setState({ list });
      })
      .catch((error: Error) => {
        console.error('Error', error);
      });
  };

  render = (): React.Element<typeof React.Fragment> => (
    <React.Fragment>
      <Navigation />
      <Title>ToDo list</Title>
      <section>
        <article>
          {_.map(this.state.list, ({ id, name }: RecordType, index: number): React.Element<'a'> => (
            <h3 key={`${index}-to-do-record`}>
              <Link to={{ pathname: `/to-do/${id}` }}>{name}</Link>
            </h3>
          ))}
        </article>
      </section>
    </React.Fragment>
  );
}

export default ToDo;

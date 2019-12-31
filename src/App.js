import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '세종대왕',
    'birthday': '962552',
    'gender': '남자',
    'job': '왕'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순녀',
    'birthday': '861222',
    'gender': '여자',
    'job': '주부'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => 
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
        )}
      </div>
    );
  }
}

export default App;

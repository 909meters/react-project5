import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Friend.css';

export default function Friend() {
  const { friend } = useParams();
  const [chosenFriend, setChosenFriend] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const friends = [
      {
        name: 'Akira',
        age: 18,
        country: 'Tokyo',
        image: 'https://i.pinimg.com/736x/f0/82/4c/f0824cf7953629dddd45bd886efa9ab2--haruma-miura-japanese-guys-handsome.jpg'
      },
      {
        name: 'Kaneki',
        age: 23,
        country: 'New Delhi', 
        image: 'https://i.pinimg.com/originals/bb/aa/3a/bbaa3ae46cba83615a0f81637ce255c5.jpg'
      },
      {
        name: 'Linda',
        age: 34,
        country: 'Poland', 
        image: 'https://iv1.lisimg.com/image/8570024/740full-linda-cardellini.jpg'
      }
    ];

    const foundFriend = friends.find((person) => person.name === friend);
    
    if (foundFriend) {
      setChosenFriend(foundFriend);
      setErrorMessage('');
    } 
    else {
      setErrorMessage('You do not have such friend at the moment in your friend list');
    }
  }, [friend]);

  if (errorMessage) {
    return (
      <div class="alert alert-danger" role="alert">
        {errorMessage}
      </div>
    )
  }

  if (!chosenFriend) {
    return (
      <h1>
        Choose your friend
      </h1>
    )
  }

  return (
    <div class="info box">
      <img src={`${chosenFriend.image}`} class="picture"/>
      <div>
        <h3>{chosenFriend.name}</h3>
        <p>
          Age: {chosenFriend.age} <br/>
          Country: {chosenFriend.country}
        </p>
      </div>
    </div>
  )
}
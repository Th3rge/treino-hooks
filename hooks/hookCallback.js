import React, { useState, useCallback, useEffect } from 'react';
import List from './List';

const HookCallback = () => {
  const [text, setText] = useState('');
  const [resourceType, setResourceType] = useState('posts');

  const getItems = useCallback(async () => {
    console.log('getItems is being called!');
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resourceType}`
    );

    const responseJSON = await response.json();

    return responseJSON;
  }, [resourceType]);

  return (
    <div>
      <input value={text} onChange={(e) => e.target.value} />

      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <button onClick={() => setResourceType('todos')}>Todos</button>

      <List getItems={getItems} />
    </div>
  );
};

export default HookCallback;

export const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((result) => setItems(result));
  }, [getItems]);

  return (
    <>
      {items &&
        items.map((item) => <p key={item.id}>{item?.title || item?.name}</p>)}
    </>
  );
};

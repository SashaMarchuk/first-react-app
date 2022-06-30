import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import { getContainers } from '../../firebase/fireStore/methods';

const Todo = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await getContainers();

      setData(result);
      console.log('result: ', result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="Todo">
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        !!data?.length && (
          <ul>
            {data?.map((item, index) => (
              <li key={index}>
                <br />
                <ul>
                  <li>isDeleted: {item.isDeleted.toString()}</li>
                  <li>name: {item.name}</li>
                  <li>type: {item.type}</li>
                </ul>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

Todo.propTypes = {};

Todo.defaultProps = {};

export default Todo;

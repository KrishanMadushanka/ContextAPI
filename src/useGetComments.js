import {useQuery} from 'react-query';

const getComments = async () => {
  const url = 'https://jsonplaceholder.typicode.com/comments/1';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Parsed JSON data:', data);

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

export function useGetComments() {
  return useQuery(['getComments'], () => getComments());
}

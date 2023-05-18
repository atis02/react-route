import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export const Book = () => {
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();

  const changePage = () => {
    const randomNumber = Math.floor(Math.random() * 50)
    setSearchParams({ page: randomNumber, author: 'Jack London'  })
  }

	return (
		<div>
			<div>Selected book ID: {params.id}</div>
			<div>Author: {searchParams.get('author')}</div>
			<div>
				<button onClick={changePage}>Change page</button>
				<span>Page: {searchParams.get('page')}</span>
			</div>
		</div>
	);
};

import Fuse from 'fuse.js';
import { useState } from 'react';
import { Input } from './ui/input';

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
	keys: ['data.title', 'data.description', 'body'],
	includeMatches: true,
	minMatchCharLength: 2,
	threshold: 0.6,
};


// TODO : responsive design for handphone screen

function SearchBlog({ searchList }) {
    // console.log(searchList);
	// User's input
	const [query, setQuery] = useState('');

	const fuse = new Fuse(searchList, options);

	// Set a limit to the posts: 5
	const posts = fuse
		.search(query)
		.map((result) => result.item)
		.slice(0, 5);

	function handleOnSearch({ target = {} }) {
		const { value } = target;
		setQuery(value);
	}

	return (
		<div className='grid grid-rows relative'>
			<div className="relative w-80">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
                </svg>
                <Input type="search" placeholder="Cari berita" className="pl-12 pr-4"onChange={handleOnSearch} />
            </div>
			{query.length > 1 && 
				<div className='absolute top-10 z-50 bg-gray-100 dark:bg-slate-800 rounded-xl p-2'>
				<p className='my-2'>
					Ditemukan {posts.length} berita terkait '{query}'
				</p>
			
				<ul>
					{posts &&
						posts.map((post) => (
							<li className='mb-2'>
								<a href={`/blog/${post.slug}`} className='text-lg semibold hover:underline underline-offset-2 font-heading'>{post.data.title}</a>
								<p className='line-clamp-1'>{post.data.description}</p>
							</li>
						))}
				</ul>
			</div>
			}
			
			
		</div>
	);
}

export default SearchBlog;


import { useEffect, useRef } from 'react';
import { useKey } from './hooks/useKey';

export default function Search({ query, setQuery }) {
  // NOT REACT WAY (Not Declarative)
  // useEffect(function () {
  //   const el = document.querySelector('.search');
  //   console.log(el);
  //   el.focus();
  // }, []);

  const inputRef = useRef(null);

  useKey('Enter', function () {
    if (document.activeElement === inputRef.current) return;
    inputRef.current.focus();
    setQuery('');
  });

  useEffect(function () {
    inputRef.current.focus();
  }, []);

  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (document.activeElement === inputRef.current) return;

  //       if (e.key === 'Enter') {
  //         inputRef.current.focus();
  //         setQuery('');
  //       }
  //     }

  //     document.addEventListener('keydown', callback);

  //     return () => document.addEventListener('keydown', callback);
  //   },
  //   [setQuery]
  // );

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputRef}
    />
  );
}

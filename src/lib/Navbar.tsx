'use client'
import React from 'react';
import { useFetch } from './useFetch';
import { navbarDefault } from './style.Db';
import Image from 'next/image';
import Link from 'next/link';




const Navbar: React.FC = () => {
  const { data, loading, error } = useFetch('http://localhost:3000/api/getnavbar');

  if (loading) {
    return <div>Loading...</div>; // Return JSX when loading
  }

  if (error) {
    return <div>{error}</div>; // Return JSX when there's an error
  }

  return (
    <div className={navbarDefault.main}>
      <div className={navbarDefault.logo}>
        {/* Example usage of Image component */}
        <Image src="/vercel.svg" width={125} height={40} alt="Logo" />
      </div>
      <ul className={navbarDefault.orderlist}>
        {data &&
          data.map((item: any, index: number) => (
            <li key={index} className={navbarDefault.links}>
             {item.url ?(
                <Link href={item.url}>
                    {item.name}
                </Link>
             ):(
                <span>{item.name}</span>
             )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navbar;

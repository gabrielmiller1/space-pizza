import React from 'react';
import styles from './Search.module.scss';
import { CgSearch } from 'react-icons/cg';

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function Search(props: SearchProps) {
  return (
    <div className={styles.buscador}>
      <input
        value={props.search}
        onChange={(event) => props.setSearch(event.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5F" />
    </div>
  );
}

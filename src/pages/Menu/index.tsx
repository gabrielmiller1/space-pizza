import styles from './Menu.module.scss';

import { Search } from './Search';
import { useState } from 'react';
import { Filters } from './Filters';
import { Order } from './Order';
import { Items } from './Items';

export function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState('');

  return (
    <main>
      <nav className={styles.menu}>
        {/* <Logo /> */}
        <h1>&lt; SPACE PIZZA &frasl; &gt;</h1>
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do Código e da Massa.</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.cardapio__filtros}>
          <Filters filter={filter} setFilter={setFilter} />
          <Order order={order} setOrder={setOrder} />
          <Items search={search} filter={filter} order={order} />
        </div>
      </section>
    </main>
  );
}

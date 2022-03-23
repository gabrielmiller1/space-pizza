import cardapio from "./items.json";
import styles from "./Items.module.scss";

import { Item } from "./Item";
import { useEffect, useState } from "react";

interface ItemsProps {
  filter: number | null;
  search: string;
  order: string;
}

export function Items(props: ItemsProps) {
  const { search, filter, order } = props;

  const [list, setList] = useState(cardapio);

  function testSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function orderList(newList: typeof cardapio) {
    switch (order) {
      case "porcao":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtdpessoas":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "preco":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = cardapio.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(orderList(newList));
  }, [search, filter, order]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

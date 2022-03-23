import React from "react";
import filtros from "./filtros.json";
import styles from "./Filters.module.scss";
import classNames from "classnames";

type IOpcao = typeof filtros[0];

interface FilterProps {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export function Filters(props: FilterProps) {
  function selectFilter(opcao: IOpcao) {
    if (props.filter === opcao.id) {
      return props.setFilter(null);
    }
    return props.setFilter(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles["filtros__filtro--ativo"]]: props.filter == opcao.id,
          })}
          key={opcao.id}
          onClick={() => selectFilter(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}

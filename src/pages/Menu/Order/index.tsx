import styles from "./Order.module.scss";
import options from "./options.json";
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface OrderProps {
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}

export function Order({ order, setOrder }: OrderProps) {
  const [open, setOpen] = useState(false);
  const nameOrder =
    order && options.find((option) => option.value === order)?.nome;
  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles["ordenador--ativo"]]: order !== "",
      })}
      onClick={() => {
        setOpen(!open);
      }}
      onBlur={() => setOpen(false)}
    >
      <span>{nameOrder || "Ordenar por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={styles.ordenador__option}
            onClick={() => setOrder(option.value)}
          >
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
}

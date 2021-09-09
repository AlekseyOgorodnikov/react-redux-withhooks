import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './style.css';
import { paths } from '../../constants';
import { animateActions } from '../../store/animate';

export const Navbar = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleClickLink = (path) => (event) => {
    event.preventDefault();
    dispatch(animateActions.setStartAnimate(true));

    const animateTimeout = setTimeout(() => {
      history.push(path);
      dispatch(animateActions.setStartAnimate(false));
      clearTimeout(animateTimeout);
    }, 700);
  };

  return (
    <div className="navbar">
      <a className="navbar-link" href="#" onClick={handleClickLink(paths.main)}>
        Главная
      </a>
      <a
        className="navbar-link"
        href="#"
        onClick={handleClickLink(paths.about)}
      >
        О нас
      </a>
      <a
        className="navbar-link"
        href="#"
        onClick={handleClickLink(paths.settings)}
      >
        Настройки
      </a>
      <a
        className="navbar-link"
        href="#"
        onClick={handleClickLink(paths.dataList)}
      >
        Данные
      </a>
    </div>
  );
};

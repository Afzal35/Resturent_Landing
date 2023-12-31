import React,{Fragment} from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';




const Header=props=>{
       return (<Fragment>
          <header className={classes.header}>
            <h1 >The-Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
          </header>
          <div className={classes['main-image']}>
            <img  src={mealsImage} alt='Table is Loaded with Delicious food' />
          </div>
       </Fragment>)
}
export default Header;
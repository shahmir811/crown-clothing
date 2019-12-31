import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// styles
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './headers.styles';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCardHidden } from '../../redux/cart/cart.selectors';
import { userSignOutStart } from '../../redux/user/user.actions';

const Header = props => {
  const { currentUser, hidden, userSignOutStart } = props;

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => userSignOutStart()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCardHidden
});

const mapDispatchToProps = dispatch => ({
  userSignOutStart: () => dispatch(userSignOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

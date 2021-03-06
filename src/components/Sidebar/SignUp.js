import React from 'react';
import { FormattedMessage } from 'react-intl';
import './SidebarBlock.less';
import { Link } from 'react-router-dom';

const SignUp = () =>
  (<div className="SidebarBlock">
    <h3 className="SidebarBlock__title">
      <FormattedMessage id="new_to_utopian" defaultMessage="New to Knacksteem?" />
      <p className="SidebarBlock__desc">knacksteem uses the Steem blockchain to reward graete aricle writters.</p>
    </h3>
    <a target="_blank" rel="noopener noreferrer" href="https://steemit.com/pick_account">
      <button className="SidebarBlock__button">
        <span className="SidebarBlock__text"><img src="/img/steem.svg" /> Sign up with Steemit</span>
      </button>
    </a>
  </div>);

export default SignUp;

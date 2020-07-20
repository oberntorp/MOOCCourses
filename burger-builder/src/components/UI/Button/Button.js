import React from 'react';
import classes from './Button.module.css';
import { checkPropTypes } from 'prop-types';

const button = () => (<button>{props.children}</button>);
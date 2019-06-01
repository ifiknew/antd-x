import * as React from 'react';
import ReactDOM from 'react-dom';
import { Avatar } from 'antd';
import { AvatarProps } from 'antd/lib/avatar';
import ClassName from '../utils/ClassName';
import ConfigContext from '../utils/ConfigContext';
export interface ChipProps {
  label: React.ReactNode;
  size?: AvatarProps['size'];
  avatarProps: AvatarProps;
}

function Chip(props: ChipProps) {
  const { classNamePrefix } = React.useContext(ConfigContext)

  const { label, size = 'default' } = props
  const createClassName = ClassName.generate(ClassName.generate(classNamePrefix)('chip'))

  return (
    <div className={createClassName('')}>
      <Avatar size={size} className={createClassName('avatar')}/>
      <div className={createClassName('label', { size })}>{label}</div>
    </div>
  );
}

export default Chip

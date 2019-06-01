import * as React from 'react';
import { Avatar as AntdAvatar } from 'antd';  
import { AvatarProps as AntdAvatarProps } from 'antd/lib/avatar';
import ConfigContext from '../utils/ConfigContext';
import ClassName from '../utils/ClassName';
import Icon, { IconProps } from 'antd/lib/icon';

interface HoverConfig {
  icon?: React.ReactNode
  type?: IconProps['type']
}
export interface AvatarProps extends AntdAvatarProps {
  hover?: HoverConfig
}

function Avatar(props: AvatarProps) {

  const { classNamePrefix, antdClassNamePrefix } = React.useContext(ConfigContext)

  const { hover, children, className, ...antdAvatarProps } = props
  const { size, style = {} } = antdAvatarProps
  const createClassName = ClassName.generate(ClassName.generate(classNamePrefix)('avatar'))

  const sizeStyle = typeof size === 'number' ? {
    width: size,
    height: size,
    lineHeight: `${size}px`,
    fontSize: hover ? size / 2 : 18
  } : {}
  
  return (
    <div 
      className={ClassName.combine(
        createClassName(''),
        ClassName.generate(antdClassNamePrefix)(
          'avatar', 
          { 
            size: antdAvatarProps.size, 
            postfixes: [antdAvatarProps.shape || 'circle'] 
          }
        ),
        className,
      )}
      style={{ ...sizeStyle, ...style }}
    >
      <AntdAvatar {...antdAvatarProps} />
      {hover && (
        <div className={createClassName('hover-cover')}>
          {hover.icon ? hover.icon : <Icon type={hover.type} />}
        </div>
      )}
    </div>
  )
}

export default Avatar
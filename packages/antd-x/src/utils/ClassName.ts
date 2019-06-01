interface AutoConfig {
  size?: 'small' | 'default' | 'large' | number,
  postfixes?: string[]
}
const sizeToString = (size?: 'small' | 'default' | 'large' | number) => {
  switch (size) {
    case 'small':
      return 'sm'
    case 'large':
      return 'lg'
    default:
      break;
  }
  return ''
}

const ClassName = {
  generate: (prefix: string) => (current: string, autoConfig: AutoConfig = {}) => {

    const sizePostfix = sizeToString(autoConfig.size)
    const postfixes = [...(autoConfig.postfixes || []), sizePostfix].filter(Boolean)

    const baseClassName = `${prefix}${current && !prefix.endsWith('-') ? '-' : ''}${current}`
    return postfixes.length > 0 ? `${baseClassName} ${postfixes.map(v => `${baseClassName}-${v}`).join(' ')}` : baseClassName
  },
  combine: (...classNames: string[]) => {
    return classNames.filter(Boolean).join(' ')
  }
}

export default ClassName
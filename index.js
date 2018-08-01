export default (str, { addSpace = true, space = addSpace ? ' ' : '' } = {}) =>
  str.split(' ').join(`${space}👏${space}`)

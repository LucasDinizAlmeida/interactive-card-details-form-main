type InputsType = 'name' | 'cardNumber' | 'month' | 'year' | 'secretCode'

export function checkContent(value: string | undefined, type: InputsType) {

  if (value) {
    return value
  }

  switch (type) {
    case 'name':
      return 'JAMES CLARK'
    case 'cardNumber':
      return '0000000000000000'
    case 'month':
      return '00'
    case 'year':
      return '00'
    case 'secretCode':
      return '123'

    default:
      return ''
      break;
  }
}
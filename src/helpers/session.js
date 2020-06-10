export function checkCredentials(params) {
  if (
    params.userName.toLowerCase() !== 'student' ||
    params.password !== 'student'
  ) {
    return false
  }

  return true
}

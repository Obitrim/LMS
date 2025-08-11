class EmployeeHelper {
  static fullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  }

  static initials(name: string, max: number = 2) {
    return name
      .split(' ')
      .slice(0, max)
      .map((name) => name.charAt(0))
      .join('');
  }
}

export default EmployeeHelper;

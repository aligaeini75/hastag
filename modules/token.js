class Token {
  static token = null;

  static getToken() {
    if (this.token == null) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  static setToken({ new_token }) {
    localStorage.setItem('token', new_token);

    this.token = new_token;
  }
}

export default Token;

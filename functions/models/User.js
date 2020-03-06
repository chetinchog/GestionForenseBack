class Evidence {
  constructor(user) {
    this._id = user._id;
    this.username = user.username;
    this.password = user.password;
    this.role = user.rol;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  update() {
    this.updatedAt = new Date();
  }
}

Evidence.self = "user";

module.exports = Evidence;

class Evidence {
  constructor(role) {
    this._id = role._id;
    this.name = role.name;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  update() {
    this.updatedAt = new Date();
  }
}

Evidence.self = "role";

module.exports = Evidence;

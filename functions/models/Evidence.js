class Evidence {
  constructor(evidence) {
    this._id = evidence._id;
    this.state = "PENDIENTE DE REVISIÓN";
    this.number = evidence.number;
    this.description = evidence.description;
    this.image = evidence.image;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  update() {
    this.updatedAt = new Date();
  }
}

Evidence.self = "evidence";

module.exports = Evidence;

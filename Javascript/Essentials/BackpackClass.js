class Backpack {
  constructor(name, toggleId, acquired) {
    this.name = name;
    this.toggleId = toggleId;
    this.acquired = acquired;
  }

  UpdateBackpackToggleId(toggleid) {
    this.toggleId = toggleid;
    console.log("updating backpac toggle id", toggleid);
  }

  GetPackbackAge() {
    let now = new Date();
    let acquiredDate = new Date(this.acquired);
    let elapsed = now - acquiredDate;
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Backpack;

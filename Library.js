class Library {
  constructor(nameLibrary) {
    this.nameLibrary = nameLibrary
    this.groups = []
  }

  get nameInfo() {
    return this.nameLibrary
  }

  get groupsInfo() {
    return this.groups
  }

  set nameInfo(newNameLibrary) {
    this.nameLibrary = newNameLibrary
  }

  addGroup(nameGroup) {
    const group = new Group(nameGroup, this.nameLibrary)
    this.groups.push(group)
    return group
  }

  removeGroup(nameGroup) {
    this.groups = this.groups.filter(function (group) {
      if (nameGroup !== group.nameGroup) {
        return group
      }
    })
  }

  searchEditionYear(year) {
    const arrEdition = []
    this.groups.forEach(function(group) {
      group.edition.forEach(function(edition) {
        if (edition.year === year) {
          arrEdition.push(edition)
        }
      })
    })
    return arrEdition
  }
}
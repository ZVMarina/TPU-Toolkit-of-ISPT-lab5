class Edition {
  constructor(name, author, year, group) {
    this.name = name
    this.author = author
    this.year = year
    this.group = group
    this.checkYear()
  }

  get nameInfo() {
    return this.name
  }

  get authorInfo() {
    return this.author
  }

  get yearInfo() {
    return this.year
  }

  set nameInfo(newName) {
    this.name = newName
  }

  set authorInfo(newAuthor) {
    this.author = newAuthor
  }

  set yearInfo(newYear) {
    this.year = newYear
  }

  generateDescription(description) {
    this.description = description

    if (!this.name) {
      throw new BookException("Нет названия издания");
    }
    if (!this.author) {
      throw new BookException("Нет имени автора");
    }
  }

  validateYear() {
    if (!this.year || this.year < 0) {
      throw new YearEditionException(`Невозможно создать издание – указан некорректный год издания: ${this.year}`);
    }
  }

  checkYear() {
    try {
      this.validateYear()
    } catch (err) {
      alert(err.message);
      throw new YearEditionException(err.message);
    }
  }
}
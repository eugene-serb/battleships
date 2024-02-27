class Drawer {
  constructor(containerField, config) {
    this.containerField = containerField;
    this.config = config;
  }

  draw(map) {
    for (const row of map) {
      for (const rowElement of row) {
        let cell = document.createElement('div');
        this.config[rowElement]['class'].split(' ').forEach((cellClass) => {
          cell.classList.add(cellClass);
        });
        if (rowElement === 0 && this.config[0]['handle']) {
          cell.addEventListener('click', this.config[rowElement]['handle']);
        }
        this.containerField.appendChild(cell);
      }
    }
  }
}

export default Drawer;

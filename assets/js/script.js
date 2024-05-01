function rotateMatrix() {
    // Get matrix from input textarea
    const inputMatrix = document
      .getElementById("matrix")
      .value.trim()
      .split("\n")
      .map((row) => row.split(",").map(Number));
  
    // Rotate the matrix in-place
    const n = inputMatrix.length;
    for (let i = 0; i < n / 2; i++) {
      for (let j = i; j < n - 1 - i; j++) {
        const temp = inputMatrix[i][j];
        inputMatrix[i][j] = inputMatrix[n - 1 - j][i];
        inputMatrix[n - 1 - j][i] = inputMatrix[n - 1 - i][n - 1 - j];
        inputMatrix[n - 1 - i][n - 1 - j] = inputMatrix[j][n - 1 - i];
        inputMatrix[j][n - 1 - i] = temp;
      }
    }
  
    // Display the rotated matrix in the console
    console.log("Rotated Matrix:");
    inputMatrix.forEach((row) => {
      console.log(row.join(", "));
    });
  
    // Display the rotated matrix on the webpage
    displayMatrix(inputMatrix, "rotatedMatrix");
  }
  
  function displayMatrix(matrix, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
  
    const table = document.createElement("table");
    table.className = "matrixTable";
  
    matrix.forEach((row) => {
      const tableRow = document.createElement("tr");
  
      row.forEach((cell) => {
        const tableCell = document.createElement("td");
        tableCell.textContent = cell;
        tableRow.appendChild(tableCell);
      });
  
      table.appendChild(tableRow);
    });
  
    container.appendChild(table);
  }
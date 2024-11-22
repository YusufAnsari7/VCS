document.getElementById("download-pdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  // Capture the invoice as a PDF
  const invoice = document.getElementById("invoice");
  html2canvas(invoice, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 190; // Width in mm
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("Invoice.pdf");
  });
});

// Function to add a new row to the billing table
function addRow() {
  const table = document.getElementById("billing-rows");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${table.children.length + 1}</td>
    <td><input type="text" placeholder="Service Description"></td>
    <td><input type="text" placeholder="SAC Code"></td>
    <td><input type="number" placeholder="Amount"></td>
  `;
  table.appendChild(row);
}
document.getElementById("download-pdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  // Capture the invoice as a PDF
  const invoice = document.getElementById("invoice");
  html2canvas(invoice, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 190; // Width in mm
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("Invoice.pdf");
  });
});

// Function to add a new row to the billing table
function addRow() {
  const table = document.getElementById("billing-rows");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${table.children.length + 1}</td>
    <td><input type="text" placeholder="Service Description"></td>
    <td><input type="text" placeholder="SAC Code"></td>
    <td><input type="number" placeholder="Amount"></td>
  `;
  table.appendChild(row);
}

// Calculate total tax and grand total
const cgstInput = document.getElementById("cgst");
const sgstInput = document.getElementById("sgst");
const igstInput = document.getElementById("igst");
const totalTaxInput = document.getElementById("total-tax");
const grandTotalInput = document.getElementById("grand-total");

[cgstInput, sgstInput, igstInput].forEach(input => {
  input.addEventListener("input", () => {
    const cgst = parseFloat(cgstInput.value) || 0;
    const sgst = parseFloat(sgstInput.value) || 0;
    const igst = parseFloat(igstInput.value) || 0;

    const totalTax = cgst + sgst + igst;
    totalTaxInput.value = totalTax;

    // Update grand total (example calculation; adjust based on your needs)
    const baseAmount = 1000; // Replace with actual logic
    grandTotalInput.value = baseAmount + (baseAmount * totalTax) / 100;
  });
});

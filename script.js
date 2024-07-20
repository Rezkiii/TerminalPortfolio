const inputElement = document.querySelector('.input');
const outputElement = document.querySelector('.output');

inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Handle Enter key (without moving cursor down)
    const input = this.textContent.trim();
    if (input) {
      // Handle "help" command
      if (input.toLowerCase() === 'help') {
        outputElement.textContent += '\nAvailable commands:\n';
        outputElement.textContent += '1. Portfolio\n';
        outputElement.textContent += '2. Project\n';
        outputElement.textContent += '3. About Me\n';
        outputElement.textContent += '4. Clear\n';
      } else if (input.toLowerCase() === 'clear') {
        outputElement.textContent = ''; // Clear the output area
      } else if (input.toLowerCase() === 'about me') {
        outputElement.textContent += 'rezki@127.0.0.2 : ~$ Nama saya Muh Rezki dan saya adalah seorang mahasiswa di Politeknik Negeri Ujung Pandang Program Studi D4 Teknik Komputer dan Jaringan. baru ini, blum kepikiran yang lain\n';
      } else if (input.toLowerCase() === 'portfolio') {
        // Handle "portofolio" command
        outputElement.textContent += 'rezki@127.0.0.2 : ~$ Maaf masih tahap pembangunan:v\n';
      } else if (input.toLowerCase() === 'project') {
        // Handle "portofolio" command
        outputElement.textContent += 'rezki@127.0.0.2 : ~$ Maaf projectnya baru mau diisi jadi masih coming soon\n';
      } else {
        // Handle other commands (add logic here)
        outputElement.textContent += `Perintah ${input} Belum Tersedia. Tolong gunakan help untuk melihat perintah\n`; // Placeholder for other commands
        // outputElement.textContent += 'Command not implemented yet\n';
      }

      // Prevent cursor movement and new line
      event.preventDefault();
      this.textContent += '\r'; // Append carriage return (CR) to the input field (without adding a new line)

      // Clear the input field
      this.textContent = '';

      // Scroll to the bottom of the output area
      outputElement.scrollTop = outputElement.scrollHeight;
    }
  }
});


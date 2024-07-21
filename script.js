const inputElement = document.querySelector('.input');
const outputElement = document.querySelector('.output');
const errorAudio = document.getElementById('errorAudio'); // Get audio element

const videoElement = document.createElement('video'); // Create video element
videoElement.src = 'aaaa.mp4'; // Set video source (replace with your video path)
videoElement.id = 'myVideo'; // Assign a unique ID for styling

// Add the video element to the DOM (e.g., after the outputElement)
outputElement.parentNode.insertBefore(videoElement, outputElement.nextSibling);

// Initially hide the video (using CSS)
videoElement.style.display = 'none';

inputElement.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
	// Handle Enter key (without moving cursor down)
		const input = this.textContent.trim();
    		if (input) {
			// Handle "help" command
	    		  	if (input.toLowerCase() === 'help') {
					outputElement.textContent += '\nAvailable commands:\n';
					outputElement.textContent += '1. Portfolio\n';
					outputElement.textContent += '2. About Me\n';
					outputElement.textContent += '3. Contact\n';
					outputElement.textContent += '4. Clear\n';
					outputElement.textContent += '5. Tryme\n';
					
				} else if (input.toLowerCase() === 'clear') {
					outputElement.textContent = ''; // Clear the output area
						
				} else if (input.toLowerCase() === 'contact') {
		    			

						// Create clickable links for contact information
					outputElement.innerHTML += '\nContact Me At : \n';
					outputElement.innerHTML += `<a href="https://www.linkedin.com/in/muh-rezkiii/" target="_blank">Muh Rezki (LinkedIn)</a><br>`; // Link for LinkedIn
						outputElement.innerHTML += `<a href="https://www.instagram.com/rezki_zk/" target="_blank">\nrezki_zk (Instagram)\n</a><br>`; // Link for Instagram

				} else if (input.toLowerCase() === 'about me') {
        				outputElement.textContent += '\nHaloo! Saya Muh Rezki,seorang mahasiswa Teknik Komputer dan Jaringan di Politeknik Negeri Ujung Pandang. Gemar pemrograman Python, web development, ilustrasi digital, dan animasi 3D (Blender). Antusias belajar lebih dan kreatif, \n';
      				} else if (input.toLowerCase() === 'portfolio') {
         	  			// Handle "portfolio" command
       				outputElement.textContent += '\nList Project : \n';
					const projects = [
						{ name: 'MySql To CSV Converter', url: 'https://github.com/Rezkiii/Mysql-to-CSV' },
						{ name: 'Botnet Virus', url: 'https://github.com/Rezkiii/Botnet-virus' },
						{ name: 'Face Recognition Attendance', url: 'https://github.com/Rezkiii/Face-Recognition-Attendance' },
						{ name: 'Food Recommendation System Using Pyspark\n', url: 'https://github.com/Rezkiii/Food_Recommendation_Sistem_Using_PySpark_and_Flask' },
				       ];
				       projects.forEach(project => {
					 outputElement.innerHTML += `<a href="${project.url}" target="_blank">${project.name}</a><br>`;
				       });
				} else if (input.toLowerCase() === 'tryme') {
       				 outputElement.textContent += '\nType Hello to unlock secret command\n';
       			} else if (input.toLowerCase() === 'hello') {
       				 outputElement.textContent += '\nHello? okey type Bello for super secret command\n';
       			} else if (input.toLowerCase() === 'bello') {
					 videoElement.style.display = 'block'; // Show the video
						videoElement.play();

						// Reset video and hide after playback
						videoElement.addEventListener('ended', () => {
						  videoElement.style.display = 'none'; // Hide the video again
						  videoElement.currentTime = 0; // Reset video to beginning
						});
      				} else {
					// Handle other commands
					outputElement.textContent += `\nPerintah ${input} Belum Tersedia. Tolong gunakan help untuk melihat perintah\n`;
					errorAudio.play(); // Play audio on error command
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

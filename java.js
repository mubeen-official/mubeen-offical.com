function showBirthdayMessage() {
    alert("🎉 Happy Birthday Fazi chloo! 🎂🎈");
    
    // Show confetti animation
    const confettiContainer = document.querySelector('.confetti');
    confettiContainer.style.display = "block";
  
    // Generate random confetti pieces
    for (let i = 0; i < 100; i++) {
      let confetti = document.createElement('div');
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
      confetti.style.animationDelay = `${Math.random() * 2}s`;
  
      const colors = ['#ff6347', '#ff4500', '#32cd32', '#1e90ff', '#ff1493'];
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
      confettiContainer.appendChild(confetti);
    }
  
    // Hide confetti after animation completes
    setTimeout(() => {
      confettiContainer.style.display = "none";
      confettiContainer.innerHTML = ""; // Clear the confetti
    }, 5000);
  }
  
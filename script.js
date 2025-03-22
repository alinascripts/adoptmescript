document.getElementById("copyBtn").addEventListener("click", function() {
    let scriptBox = document.getElementById("scriptBox");
    scriptBox.select();
    scriptBox.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    alert("Script copied to clipboard!");
});

// Discord Button Functionality
document.getElementById("discordBtn").addEventListener("click", function() {
    window.open("https://discord.gg/7NfJp7WB7T", "_blank"); // Replace with actual invite link
});

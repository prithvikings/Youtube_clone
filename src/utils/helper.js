
export function generateRandomName() {
    const nameList = [
        "Aarav", "Saanvi", "Advik", "Aanya", "Vihaan", "Ananya", "Aarush", "Diya", "Reyansh", "Pari",
        "Vivaan", "Myra", "Aditya", "Anika", "Ishaan", "Avni", "Dhruv", "Kiara", "Arjun", "Riya",
        "Sai", "Siya", "Krishna", "Aadhya", "Kabir", "Ishita", "Aryan", "Anvi", "Shaurya", "Prisha",
        "Rudra", "Zoya", "Arnav", "Mahi", "Atharv", "Navya", "Dev", "Gauri", "Veer", "Suhana"
    ];
    return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomMessage() {
    const messageList = [
        "Great video, thanks for sharing!",
        "This is really helpful.",
        "I have a question about this topic.",
        "Can you make a video on a related subject?",
        "Awesome content, keep it up!",
        "I learned a lot from this.",
        "This is exactly what I was looking for.",
        "Subscribed! Looking forward to more.",
        "Could you explain this part in more detail?",
        "This is the best tutorial I've seen on this.",
        "I'm having trouble with this, any advice?",
        "Thanks for the clear explanation.",
        "You've earned a new subscriber.",
        "I'll be sharing this with my friends.",
        "This helped me solve my problem.",
        "Looking forward to your next video.",
        "You have a great teaching style.",
        "This was very well explained.",
        "I appreciate the effort you put into this.",
        "This is pure gold!"
    ];
    return messageList[Math.floor(Math.random() * messageList.length)];
}

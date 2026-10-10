// =====================================================
// TEDDY-XMD ULTRA — EDIT YOUR LINKS HERE
// =====================================================

const CONFIG = {
  // Server 1–5 currently all use your supplied Heroku server.
  // Replace individual URLs whenever you have different servers.
  servers: [
    "https://teddyxmdultraminifinal-14c420cbedd9.herokuapp.com/",
    "https://teddyxmdultraminifinal-14c420cbedd9.herokuapp.com/",
    "https://teddyxmdultraminifinal-14c420cbedd9.herokuapp.com/",
    "https://teddyxmdultraminifinal-14c420cbedd9.herokuapp.com/",
    "https://teddyxmdultraminifinal-14c420cbedd9.herokuapp.com/"
  ],

  github: "https://github.com/Teddyxmd/TEDDY-XMD",

  // Replace these placeholders with your actual Telegram / WhatsApp
  // contact links whenever you are ready.
  socials: [
    {
      icon: "💬",
      name: "My WhatsApp",
      detail: "Direct WhatsApp contact",
      url: "https://wa.me/YOUR_NUMBER"
    },
    {
      icon: "👥",
      name: "WhatsApp Group",
      detail: "Join the Teddy Tech community",
      url: "https://chat.whatsapp.com/CLClgqJIC59GrcI4sRzLu8"
    },
    {
      icon: "📣",
      name: "WhatsApp Channel",
      detail: "News, releases & updates",
      url: "https://whatsapp.com/channel/0029Vb6NveDBPzjPa4vIRt3n"
    },
    {
      icon: "✈️",
      name: "Telegram Group",
      detail: "Community discussion",
      url: "https://t.me/YOUR_TELEGRAM_GROUP"
    },
    {
      icon: "📢",
      name: "Telegram Channel",
      detail: "Updates & announcements",
      url: "https://t.me/YOUR_TELEGRAM_CHANNEL"
    },
    {
      icon: "👨‍💻",
      name: "Contact Developer",
      detail: "Support & development",
      url: "https://wa.me/YOUR_DEVELOPER_NUMBER"
    }
  ]
};

const serverGrid = document.getElementById("serverGrid");
CONFIG.servers.forEach((url, index) => {
  const card = document.createElement("article");
  card.className = "server";
  card.innerHTML = `
    <div class="num">SERVER ${index + 1}</div>
    <h3>TEDDY-XMD ${index + 1}</h3>
    <p>Pairing server • Online</p>
    <a href="${url}" target="_blank" rel="noopener">Open Server →</a>
  `;
  serverGrid.appendChild(card);
});

const socialGrid = document.getElementById("socialGrid");
CONFIG.socials.forEach(item => {
  const card = document.createElement("a");
  card.className = "social";
  card.href = item.url;
  card.target = "_blank";
  card.rel = "noopener";
  card.innerHTML = `
    <span class="sicon">${item.icon}</span>
    <span><strong>${item.name}</strong><small>${item.detail}</small></span>
  `;
  socialGrid.appendChild(card);
});

document.getElementById("githubBtn").href = CONFIG.github;
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

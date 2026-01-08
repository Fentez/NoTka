/**
 * ============================================================================
 * KASKAD OPERATING SYSTEM (CORE ENGINE)
 * VERSION: 10.0.6 ULTIMATE STABLE (ALL GAMES RESTORED)
 * AUTHOR: S_b0t@ge
 * ============================================================================
 */

/* ============================================================================
   1. GLOBAL CONFIGURATION
   ============================================================================ */
const CONFIG = {
  bootSpeed: 40,
  typingSpeed: 15,
  passwords: {
    guest: null,
    user: "20257",
    root: "s_b0t@ge",
  },
  remoteIP: "192.168.666.13",
};

const STATE = {
  currentUser: "guest",
  hostname: "GATEWAY",
  currentPath: ["home", "guest"],
  inputLocked: true,
  isConnectedToRemote: false,
  commandHistory: [],
  historyIndex: -1,
};

/* ============================================================================
   2. VIRTUAL FILE SYSTEM (LOCAL LORE)
   ============================================================================ */
const VFS_DATA = {
  bin: {
    type: "dir",
    content: {
      ls: { type: "bin" },
      cd: { type: "bin" },
      cat: { type: "bin" },
      ssh: { type: "bin" },
      nmap: { type: "bin" },
      decrypt: { type: "bin" },
      login: { type: "bin" },
      help: { type: "bin" },
      reboot: { type: "bin" },
      clear: { type: "bin" },
      whoami: { type: "bin" },
    },
  },
  etc: {
    type: "dir",
    content: {
      passwd: {
        type: "file",
        content:
          "root:x:0:0:root:/root:/bin/bash\nuser:x:1000:1000:user:/home/user:/bin/bash",
      },
      motd: {
        type: "file",
        content:
          "KASKAD LABS :: FACILITY 01.\nStatus: OBSERVATION MODE.\nSubjects active: 24.\nMemory Wipe: COMPLETE.",
      },
      hosts: {
        type: "file",
        content: "127.0.0.1  localhost\n192.168.666.13  node_nether",
      },
    },
  },
  home: {
    type: "dir",
    content: {
      guest: {
        type: "dir",
        content: {
          "subject_brief.txt": {
            type: "file",
            content:
              "ВІТАЮ, СУБ'ЄКТ #00-NULL.\n\nВи відчуваєте дезорієнтацію? Це нормально.\nПроцедура 'TABULA RASA' стерла ваші спогади про реальний світ.\nТепер цей сервер — ваша єдина реальність.\n\nЩоб увійти в систему адміністрування, згадайте дату запуску.\nПІДКАЗКА: Рік + ID Бедрока = ?????.",
          },
          "whisper.msg": {
            type: "file",
            content:
              "Пс-с... ти мене чуєш?\nВони брешуть. Ти не хворий. Ти у в'язниці.",
          },
        },
      },
      user: {
        type: "dir",
        permissions: "user",
        content: {
          "todo.txt": {
            type: "file",
            content:
              "[x] Стерти пам'ять групі 'Новачки'\n[ ] Перевірити бар'єр ККЗ на спавні\n[ ] Знайти IP-адресу S_b0t@ge (у logs/network.log)",
          },

          journal: {
            type: "dir",
            content: {
              "day_001.log": {
                type: "file",
                content:
                  "ЗВІТ СПОСТЕРІГАЧА:\nСуб'єкти поводяться дивно. Замість того, щоб панікувати, вони б'ють дерева руками.\nХто прописав їм такі інстинкти?\nМи назвали зону 'КАСКАД'. Ніхто не має вийти за її межі.",
              },
              "day_045.log": {
                type: "file",
                content:
                  "АНОМАЛІЯ:\nОдин із суб'єктів почав будувати дивні стовпи.\nВін намагається надіслати сигнал?\nМи знайшли у нього в інвентарі книгу 'Sabotage'.\nХтось ззовні (S_b0t@ge) передає їм дані.",
              },
            },
          },

          logs: {
            type: "dir",
            content: {
              "network.log": {
                type: "file",
                content:
                  "Security Scan Results:\n----------------------\nUnauthorized signal detected.\nSource: 192.168.666.13 (NODE_NETHER)\nProtocol: SSH (Port 22)\nStatus: WAITING FOR CONNECTION...",
              },
              "glitch_report.txt": {
                type: "file",
                content:
                  "Помилка рендеру чанків.\nГравці бачать layer_02.\nВони називають це ...., але це дірки в матриці.",
              },
            },
          },
        },
      },
    },
  },
  opt: {
    type: "dir",
    content: {
      project_kaskad: {
        type: "dir",
        permissions: "root",
        content: {
          "truth.enc": {
            type: "file",
            locked: true,
            pass: "void",
            content:
              "ПРАВДА ПРО ПРОЕКТ:\n\nЦей світ — це резервна копія.\nРеальний світ ..... Ви — оцифровані свідомості.",
          },
        },
      },
    },
  },
  root: {
    type: "dir",
    permissions: "root",
    content: {
      "control_panel.exe": { type: "bin", action: "deny" },
      "system.log": {
        type: "file",
        content: "ALERT: Barrier integrity 14%.\nEntities escaping quarantine.",
      },
    },
  },
};

/* ============================================================================
   3. REMOTE FILE SYSTEM (NETHER SERVER - RIDDLES & SCHEMATICS)
   ============================================================================ */
const REMOTE_FS = {
  "readme.msg": {
    type: "file",
    content:
      "NODE_NETHER STORAGE.\n\nТут сховані креслення Вівтаря Прориву.\nЩоб відкрити файл, введіть пароль.\nПАРОЛЬ — це назва блоку англійською (маленькими літерами), про який йдеться в ..... файлу.\n\nПриклад: 'Я зелений і вибухаю' -> пароль: creeper.",
  },

  // --- ПАРОЛЬ: magma ---
  "blueprint_layer_1.enc": {
    type: "file",
    locked: true,
    pass: "magma",
    // ЗАГАДКА ТУТ (Гравець бачить це, коли файл закритий)
    hint: "ЗАГАДКА БЛОКУ:\n'Я — камінь, знайдений на дні пекельних океанів.\nЯ зберігаю тепло тисячоліть.\nВода випаровується на мені.\nЯкщо ти встанеш на мене — я обпалю твої ноги.'",
    // СЕКРЕТ ТУТ (Гравець бачить це тільки після decrypt)
    content:
      ">>> ARCHITECT BLUEPRINT [LAYER Y-1: BOTTOM] <<<\n\nОБ'ЄКТ: ФУНДАМЕНТ (MAGMA BLOCK)\n\nІНСТРУКЦІЯ БУДІВНИЦТВА:\n1. Викопайте яму глибиною в 1 блок.\n2. Покладіть ЦЕЙ блок на дно.\n3. Він буде знаходитись РІВНО ПІД ККЗ.",
  },

  // --- ПАРОЛЬ: glowstone ---
  "blueprint_layer_2.enc": {
    type: "file",
    locked: true,
    pass: "glowstone",
    // ЗАГАДКА ТУТ
    hint: "ЗАГАДКА БЛОКУ:\n'Я росту на стелі Пекла, як золоті грона.\nЯ крихкий, як скло. Мене розбиває один дотик.\nЯ розсипаюся на пил, але з 4-х жмень пилу мене можна відновити.'",
    // СЕКРЕТ ТУТ
    content:
      ">>> ARCHITECT BLUEPRINT [LAYER Y=0: SURFACE] <<<\n\nОБ'ЄКТ: ЕНЕРГЕТИЧНЕ КІЛЬЦЕ (GLOWSTONE)\n\nІНСТРУКЦІЯ РОЗСТАНОВКИ (Вид зверху):\n\n   . G . G .\n   G . . . G\n   . . C . .  <-- Центр (Магнетит)\n   G . . . G\n   . G . G .\n\nЛЕГЕНДА:\nC = Порожнє місце в центрі (для Магнетиту)\nG = Цей блок (Світлокамінь)\n. = Повітря",
  },

  "core_anchor.txt": {
    type: "file",
    content:
      ">>> ARCHITECT BLUEPRINT [CENTER] <<<\n\nОБ'ЄКТ: ЯКІР РЕАЛЬНОСТІ (LODESTONE)\n\nЦентральний елемент. Він має стояти РІВНО НАД фундаментом (блоком з Layer 1).",
  },

  "ignition_protocol.txt": {
    type: "file",
    content:
      "ФІНАЛЬНИЙ КРОК:\n\nКоли Вівтар зібрано...\nВізьміть FLINT AND ......\nВдарте  по верхівці Магнетиту.\nЦе .......",
  },
};

/* ============================================================================
   4. AUDIO ENGINE
   ============================================================================ */
class AudioEngine {
  constructor() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.08;
    this.masterGain.connect(this.ctx.destination);
  }
  playTone(freq, type, duration, vol = 1) {
    if (this.ctx.state === "suspended") this.ctx.resume();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      this.ctx.currentTime + duration
    );
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }
  sfxType() {
    this.playTone(800 + Math.random() * 400, "square", 0.02, 0.3);
  }
  sfxEnter() {
    this.playTone(400, "sine", 0.1);
    setTimeout(() => this.playTone(600, "square", 0.1), 50);
  }
  sfxError() {
    this.playTone(150, "sawtooth", 0.3, 0.5);
  }
  sfxSuccess() {
    this.playTone(500, "sine", 0.1);
    setTimeout(() => this.playTone(1000, "sine", 0.1), 100);
  }
  sfxBoot() {
    if (this.ctx.state === "suspended") this.ctx.resume();
    const bufferSize = this.ctx.sampleRate * 0.1;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.05;
    noise.connect(gain);
    gain.connect(this.masterGain);
    noise.start();
  }
  sfxConnect() {
    this.playTone(2000, "sine", 0.5, 0.05);
  }
}
const Audio = new AudioEngine();

/* ============================================================================
   5. UI & VISUALS
   ============================================================================ */
const UI = {
  screen: document.getElementById("boot-screen"),
  bootLog: document.getElementById("boot-log"),
  terminal: document.getElementById("terminal-wrapper"),
  output: document.getElementById("terminal-output"),
  inputBar: document.getElementById("input-bar"),
  input: document.getElementById("cmd-input"),
  promptUser: document.getElementById("user-prompt"),
  promptChar: document.getElementById("prompt-char"),
  clock: document.getElementById("sys-clock"),
  canvas: document.getElementById("matrix-canvas"),
  ctx: document.getElementById("matrix-canvas").getContext("2d"),

  print(text, type = "") {
    const line = document.createElement("div");
    line.className = `line ${type}`;
    line.innerHTML = text;
    this.output.appendChild(line);
    this.scrollToBottom();
  },

  async typeText(text, type = "") {
    const line = document.createElement("div");
    line.className = `line ${type}`;
    this.output.appendChild(line);

    for (let char of text) {
      line.innerHTML += char === "\n" ? "<br>" : char;
      this.scrollToBottom();
      Audio.sfxType(); // Sound effect on type!
      await delay(CONFIG.typingSpeed);
    }
  },

  clear() {
    this.output.innerHTML = "";
  },
  scrollToBottom() {
    this.output.scrollTop = this.output.scrollHeight;
  },
  updatePrompt() {
    this.promptUser.innerText = `${STATE.currentUser}@${STATE.hostname}`;
    this.promptUser.style.color =
      STATE.currentUser === "root" ? "var(--p-red)" : "var(--p-green)";
    this.promptChar.innerText = STATE.currentUser === "root" ? ":#" : ":$";
    let pathStr = STATE.isConnectedToRemote
      ? "/"
      : "/" + STATE.currentPath.join("/");
    pathStr = pathStr.replace("/home/" + STATE.currentUser, "~");
    this.promptUser.innerText += ":" + pathStr;
  },
  showInput() {
    this.input.value = "";
    this.input.focus();
  },
  updateClock() {
    const now = new Date();
    this.clock.innerText = now.toLocaleTimeString("en-US", { hour12: false });
  },
};

function initMatrix() {
  UI.canvas.width = window.innerWidth;
  UI.canvas.height = window.innerHeight;
  const chars = "0123456789KASKADSYSTEM";
  const fontSize = 16;
  const columns = UI.canvas.width / fontSize;
  const drops = [];
  for (let x = 0; x < columns; x++) drops[x] = 1;

  function draw() {
    UI.ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    UI.ctx.fillRect(0, 0, UI.canvas.width, UI.canvas.height);
    UI.ctx.fillStyle = "#0F0";
    UI.ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      UI.ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > UI.canvas.height && Math.random() > 0.975)
        drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(draw, 33);
}

/* ============================================================================
   6. FILESYSTEM & COMMANDS (FIXED HELP & CD)
   ============================================================================ */
function resolvePath(pathArg) {
  if (pathArg === undefined || pathArg === null) return [...STATE.currentPath];
  let parts = pathArg.split("/");
  let target = pathArg.startsWith("/") ? [] : [...STATE.currentPath];
  for (let part of parts) {
    if (part === "" || part === ".") continue;
    if (part === "..") {
      if (target.length > 0) target.pop();
    } else {
      target.push(part);
    }
  }
  return target;
}

function getDir(pathArray) {
  if (STATE.isConnectedToRemote) return REMOTE_FS;
  let current = VFS_DATA;
  for (let p of pathArray) {
    if (current[p] && current[p].type === "dir") {
      current = current[p].content;
    } else {
      return null;
    }
  }
  return current;
}

async function exec(cmdRaw) {
  if (!cmdRaw) return;
  const args = cmdRaw.trim().split(/\s+/);
  const cmd = args.shift().toLowerCase();

  UI.print(
    `${UI.promptUser.innerText}${UI.promptChar.innerText} ${cmdRaw}`,
    "dim"
  );

  // --- COMMANDS ---

  // 1. HELP (Aligned)
  if (cmd === "help") {
    const pad = (str) => str.padEnd(15, "\u00A0");

    UI.print("KASKAD OS COMMANDS:", "warn");
    UI.print(`${pad("ls")} List directory content`);
    UI.print(`${pad("cd [dir]")} Change directory`);
    UI.print(`${pad("cd /home")} Go back (Parent Directory)`);
    UI.print(`${pad("cat [file]")} Read file content`);
    UI.print(`${pad("clear")} Clear terminal output`);
    UI.print(`${pad("login")} Log in as another user`);
    UI.print(`${pad("whoami")} Current user info`);
    UI.print(`${pad("nmap")} Network scanner`);
    UI.print(`${pad("ssh [ip]")} Remote connection`);
    UI.print(`${pad("decrypt")} Decrypt file tool`);
    UI.print(`${pad("reboot")} Restart system`);
    return;
  }

  if (cmd === "clear") {
    UI.clear();
    return;
  }
  if (cmd === "whoami") {
    UI.print(`User: ${STATE.currentUser}`);
    return;
  }

  // 2. LS
  if (cmd === "ls") {
    const dirObj = getDir(STATE.currentPath);
    if (!dirObj) {
      UI.print("Error: FS corrupt.", "err");
      return;
    }
    const keys = Object.keys(dirObj).sort();
    if (keys.length === 0) {
      UI.print("(empty)", "dim");
      return;
    }

    for (let k of keys) {
      let item = dirObj[k];
      let isDir = item.type === "dir";
      let lock = item.locked ? "🔒" : "";
      let style = isDir ? "sys" : item.locked ? "err" : "success";
      if (
        isDir &&
        item.permissions &&
        item.permissions !== STATE.currentUser &&
        STATE.currentUser !== "root"
      ) {
        style = "dim";
        lock = "[DENIED]";
      }
      UI.print(`${isDir ? "d" : "-"}rwx ${k} ${lock}`, style);
    }
    return;
  }

  // 3. CD
  if (cmd === "cd") {
    if (STATE.isConnectedToRemote) {
      UI.print("Remote shell restricted.", "err");
      return;
    }
    let targetArg = args[0] || "/";
    let newPath = resolvePath(targetArg);
    let currentLevel = VFS_DATA;
    let valid = true;
    for (let folderName of newPath) {
      if (currentLevel[folderName] && currentLevel[folderName].type === "dir") {
        let folder = currentLevel[folderName];
        if (
          folder.permissions &&
          folder.permissions !== STATE.currentUser &&
          STATE.currentUser !== "root"
        ) {
          UI.print(`Access denied: ${folderName}`, "err");
          return;
        }
        currentLevel = folder.content;
      } else {
        valid = false;
        break;
      }
    }
    if (valid) {
      STATE.currentPath = newPath;
      UI.updatePrompt();
    } else {
      UI.print("No such directory.", "err");
    }
    return;
  }

  // 4. CAT (ОНОВЛЕНО: Показує підказку)
  if (cmd === "cat") {
    const dirObj = getDir(STATE.currentPath);
    const file = dirObj[args[0]];

    if (!file || file.type === "dir") {
      UI.print("Error: File not found or is dir.", "err");
      return;
    }

    // ЯКЩО ФАЙЛ ЗАБЛОКОВАНИЙ — ПОКАЗУЄМО ПІДКАЗКУ
    if (file.locked) {
      UI.print("Access Denied: File Encrypted.", "err");
      if (file.hint) {
        UI.print("--------------------------------", "dim");
        UI.print("SYSTEM HINT DETECTED:", "warn");
        await UI.typeText(file.hint, "sys"); // Друкуємо загадку
        UI.print("--------------------------------", "dim");
        UI.print(`Use: decrypt ${args[0]} [password]`, "dim");
      }
      return;
    }

    // ЯКЩО РОЗБЛОКОВАНИЙ — ПОКАЗУЄМО ВМІСТ
    UI.print(`--- READING ${args[0]} ---`, "dim");
    await UI.typeText(file.content);
    return;
  }

  // 5. LOGIN
  if (cmd === "login") {
    let user = args[0];
    let pass = args[1];
    if (!user || !pass) {
      UI.print("Usage: login [user] [pass]", "warn");
      return;
    }
    if (CONFIG.passwords[user] === pass) {
      STATE.currentUser = user;
      if (user === "user") STATE.currentPath = ["home", "user"];
      if (user === "root") STATE.currentPath = ["root"];
      Audio.sfxSuccess();
      UI.print(`Logged in as ${user}.`, "success");
      UI.updatePrompt();
    } else {
      Audio.sfxError();
      UI.print("Login failed.", "err");
    }
    return;
  }

  // 6. NMAP
  if (cmd === "nmap") {
    UI.print("Scanning...", "sys");
    await delay(1000);
    UI.print(`Found: ${CONFIG.remoteIP} (SSH Open)`, "success");
    return;
  }

  // 7. SSH
  if (cmd === "ssh") {
    if (args[0] === CONFIG.remoteIP) {
      UI.print("Connecting...", "sys");
      await delay(500);
      // Launch Port Scanner
      const success = await launchGame("port-scanner");
      if (success) {
        STATE.isConnectedToRemote = true;
        STATE.hostname = "NODE_NETHER";
        STATE.currentUser = "root";
        UI.print("CONNECTED TO REMOTE SERVER.", "success");
        UI.updatePrompt();
      } else {
        UI.print("Connection blocked.", "err");
      }
    } else {
      UI.print("Connection timed out.", "err");
    }
    return;
  }

  // 8. DECRYPT
  if (cmd === "decrypt") {
    let fileKey = args[0];
    let passKey = args[1];
    if (!fileKey || !passKey) {
      UI.print("Usage: decrypt [file] [pass]", "warn");
      return;
    }

    let dir = getDir(STATE.currentPath);
    let file = dir[fileKey];

    if (!file || !file.locked) {
      UI.print("Target invalid.", "err");
      return;
    }

    if (file.pass === passKey.toLowerCase()) {
      UI.print("Password Accepted. Decrypting...", "sys");

      // Choose game based on file
      let gameType = "sequence"; // Default (Simon)
      if (fileKey.includes("2")) gameType = "pin-bypass"; // Layer 2 (Red Digits)

      const success = await launchGame(gameType);
      if (success) {
        file.locked = false;
        UI.print("DECRYPTION SUCCESSFUL.", "success");
        Audio.sfxSuccess();
      } else {
        UI.print("Decryption failed.", "err");
      }
    } else {
      UI.print("Invalid password.", "err");
      Audio.sfxError();
    }
    return;
  }

  if (cmd === "reboot") {
    location.reload();
    return;
  }

  UI.print("Command not found.", "err");
}

/* ============================================================================
   7. MINI-GAMES ENGINE (FULLY RESTORED)
   ============================================================================ */
/* ============================================================================
   7. MINI-GAMES ENGINE (FIXED SCROLL)
   ============================================================================ */
/* ============================================================================
   7. MINI-GAMES ENGINE (CLEAN SCREEN VERSION)
   ============================================================================ */
function launchGame(type) {
  STATE.inputLocked = true;
  UI.inputBar.style.display = "none";

  // --- КОСТИЛЬ: ОЧИЩЕННЯ ТЕРМІНАЛУ ---
  // Видаляємо весь попередній текст, щоб гра була зверху і нічого не ламалось
  UI.clear();
  // -----------------------------------

  return new Promise((resolve) => {
    // --- GAME 1: PORT SCANNER ---
    if (type === "port-scanner") {
      const tpl = document
        .getElementById("tpl-port-scanner")
        .content.cloneNode(true);
      UI.output.appendChild(tpl);
      UI.scrollToBottom();
      const container = UI.output.lastElementChild;
      const grid = container.querySelector(".port-grid");
      const footer = container.querySelector(".game-footer");
      const timerEl = container.querySelector(".timer-val");

      grid.innerHTML = "";
      let hits = 0;
      let needed = 3;
      let time = 15;
      let activeIdx = -1;
      let boxes = [];
      let loops = [];

      footer.innerText = `PROGRESS: ${hits}/${needed}`;

      for (let i = 0; i < 12; i++) {
        let d = document.createElement("div");
        d.className = "port-item locked";
        d.onmousedown = () => {
          if (d.classList.contains("open")) {
            hits++;
            Audio.sfxType();
            d.className = "port-item locked";
            footer.innerText = `PROGRESS: ${hits}/${needed}`;
            if (hits >= needed) cleanup(true);
          } else {
            Audio.sfxError();
            time -= 2;
          }
        };
        grid.appendChild(d);
        boxes.push(d);
      }

      loops.push(
        setInterval(() => {
          time--;
          if (timerEl) timerEl.innerText = time;
          if (time <= 0) cleanup(false);
        }, 1000)
      );

      loops.push(
        setInterval(() => {
          if (activeIdx !== -1) boxes[activeIdx].className = "port-item locked";
          let next;
          do {
            next = Math.floor(Math.random() * 12);
          } while (next === activeIdx);
          activeIdx = next;
          boxes[activeIdx].className = "port-item open";
          Audio.playTone(600, "square", 0.05);
        }, 650)
      );

      function cleanup(win) {
        loops.forEach(clearInterval);
        finish(container, win);
      }
    }

    // --- GAME 2: SEQUENCE ---
    else if (type === "sequence") {
      const tpl = document
        .getElementById("tpl-sequence")
        .content.cloneNode(true);
      UI.output.appendChild(tpl);
      UI.scrollToBottom();
      const container = UI.output.lastElementChild;
      const display = container.querySelector(".seq-display");
      const grid = container.querySelector(".seq-grid");

      const pool = ["A1", "B2", "C3", "D4", "E5", "00"];
      let seq = [];
      for (let i = 0; i < 5; i++)
        seq.push(pool[Math.floor(Math.random() * pool.length)]);

      let step = 0;
      let locked = true;

      pool.forEach((code) => {
        let btn = document.createElement("div");
        btn.className = "seq-btn";
        btn.innerText = code;
        btn.dataset.code = code;
        btn.onclick = () => {
          if (locked) return;
          if (code === seq[step]) {
            Audio.sfxType();
            display.innerText = `${code} OK`;
            display.style.color = "var(--p-green)";
            step++;
            if (step >= seq.length) finish(container, true);
          } else {
            Audio.sfxError();
            display.innerText = "ERROR";
            display.style.color = "red";
            finish(container, false);
          }
        };
        grid.appendChild(btn);
      });

      (async () => {
        display.innerText = "MEMORIZE...";
        await delay(1000);
        for (let c of seq) {
          display.innerText = c;
          display.style.color = "white";
          display.style.background = "var(--p-green)";
          Audio.sfxEnter();
          let b = Array.from(grid.children).find((x) => x.dataset.code === c);
          if (b) b.classList.add("active");
          await delay(600);
          display.style.background = "";
          display.style.color = "var(--p-green-bright)";
          if (b) b.classList.remove("active");
          await delay(200);
        }
        display.innerText = "REPEAT";
        locked = false;
      })();
    }

    // --- GAME 3: PIN BYPASS (З ЗАХИСТОМ ВІД СПАМУ) ---
    else if (type === "pin-bypass") {
      const tpl = document
        .getElementById("tpl-pin-bypass")
        .content.cloneNode(true);
      UI.output.appendChild(tpl);

      const container = UI.output.lastElementChild;
      // Прокрутка до гри
      container.scrollIntoView({ behavior: "smooth", block: "center" });

      const digits = [
        container.querySelector("#d0"),
        container.querySelector("#d1"),
        container.querySelector("#d2"),
        container.querySelector("#d3"),
      ];

      let idx = 0;
      let interval;
      let speed = 450; // Трохи швидше для драйву
      let isTarget = false;
      let isWarmingUp = true; // ЗАХИСТ: Прапорець "розігріву"

      function spin() {
        if (idx >= 4) {
          finish(container, true);
          return;
        }

        const el = digits[idx];
        el.classList.add("current");

        // Вмикаємо захист на старті кожного спіна
        isWarmingUp = true;

        // Випадковий час захисту (від 1 до 2 секунд), щоб не можна було підлаштуватися
        let warmupTime = 1000 + Math.random() * 1000;

        // Через цей час дозволяємо зелений колір
        setTimeout(() => {
          isWarmingUp = false;
        }, warmupTime);

        let targetVal = Math.floor(Math.random() * 10);

        interval = setInterval(() => {
          let val = Math.floor(Math.random() * 10);
          el.innerText = val;

          // ЛОГІКА ЗАХИСТУ:
          // Цифра стає зеленою ТІЛЬКИ якщо:
          // 1. Минуло час розігріву (!isWarmingUp)
          // 2. Випало потрібне число (val === targetVal)
          if (!isWarmingUp && val === targetVal) {
            // GREEN HIT
            el.style.color = "var(--p-green-bright)";
            el.style.textShadow = "0 0 10px var(--p-green)"; // Додав світіння
            el.classList.add("is-target");
            isTarget = true;
          } else {
            // RED SPIN (Завжди червоне під час розігріву)
            el.style.color = "var(--p-red)";
            el.style.textShadow = "none";
            el.classList.remove("is-target");
            isTarget = false;
          }
        }, speed);
      }

      spin();

      const handler = (e) => {
        if (e.code === "Space") {
          e.preventDefault();

          // Якщо натиснув під час розігріву — це завжди промах (бо isTarget = false)
          if (isTarget) {
            // SUCCESS
            clearInterval(interval);
            digits[idx].classList.remove("current");
            digits[idx].classList.add("locked");
            // Фіксуємо зелений колір
            digits[idx].style.color = "var(--p-green-bright)";
            digits[idx].style.textShadow = "none";

            Audio.sfxSuccess();
            idx++;
            // Трохи пришвидшуємо з кожним кроком
            speed = Math.max(50, speed - 30);
            spin();
          } else {
            // FAIL (Сюди потрапить і спамер, який тисне на червоне)
            clearInterval(interval);
            // Робимо цифру яскраво червоною щоб показати помилку
            digits[idx].style.color = "red";
            digits[idx].style.textShadow = "0 0 10px red";

            Audio.sfxError();
            finish(container, false);
          }
        }
      };

      document.addEventListener("keydown", handler);
      container.onclick = () =>
        handler({ code: "Space", preventDefault: () => {} });

      const oldFinish = finish;
      finish = (c, w) => {
        document.removeEventListener("keydown", handler);
        clearInterval(interval);
        oldFinish(c, w);
      };
    }

    // --- COMMON FINISH ---
    function finish(container, win) {
      if (win) {
        container.innerHTML =
          "<div class='line success' style='text-align:center; padding:20px'>SUCCESS</div>";
        Audio.sfxSuccess();
      } else {
        container.innerHTML =
          "<div class='line err' style='text-align:center; padding:20px'>FAILURE</div>";
        Audio.sfxError();
      }
      setTimeout(() => {
        // Видаляємо гру
        if (container.parentNode) container.remove();

        // Очищаємо екран ще раз (про всяк випадок, щоб прибрати повідомлення SUCCESS/FAILURE)
        UI.clear();

        // Відновлюємо інтерфейс
        STATE.inputLocked = false;
        UI.inputBar.style.display = "flex";
        UI.showInput();
        resolve(win);
      }, 1000);
    }
  });
}

/* ============================================================================
   8. BOOT & UTILS
   ============================================================================ */
function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function systemBoot() {
  initMatrix();
  UI.bootLog.innerHTML = "";
  UI.screen.style.justifyContent = "flex-start";

  // Boot sequence with sound
  const lines = [
    "KASKAD BIOS v10.0.6",
    "CPU: QUANTUM CORE [OK]",
    "Loading Kernel...",
    "Mounting VFS... OK",
    "Network... UP",
    "WARNING: FIREWALL BREACHED",
    "SYSTEM READY.",
  ];

  for (let l of lines) {
    let d = document.createElement("div");
    d.className = "boot-line";
    d.innerText = l;
    if (l.includes("WARN")) d.style.color = "var(--p-amber)";
    UI.bootLog.appendChild(d);
    Audio.sfxBoot();
    await delay(150);
  }
  await delay(1000);
  UI.screen.style.display = "none";
  UI.terminal.classList.remove("hidden");
  UI.terminal.classList.add("visible");
  STATE.inputLocked = false;
  UI.showInput();
  setInterval(() => UI.updateClock(), 1000);
  UI.print("KASKAD LABS TERMINAL ACCESS", "warn");
  UI.print("Type 'help' for commands.", "sys");
}

UI.input.addEventListener("keydown", async (e) => {
  if (STATE.inputLocked) {
    e.preventDefault();
    return;
  }
  if (e.key === "Enter") {
    let val = UI.input.value;
    UI.input.value = "";
    if (val.trim()) {
      Audio.sfxEnter();
      STATE.inputLocked = true;
      await exec(val);
      STATE.inputLocked = false;
      UI.scrollToBottom();
    }
  }
});

document.addEventListener("click", () => {
  if (!STATE.inputLocked && !UI.terminal.classList.contains("hidden"))
    UI.input.focus();
});

window.onload = systemBoot;

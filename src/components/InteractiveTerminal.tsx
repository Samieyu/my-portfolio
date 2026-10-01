import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { personalInfo, projectsData, certificatesData } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            [+] Samuel Woldemeskel Cyber Shell (v1.0.4 - Wachemo SE / INSA SecLab)
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-cyan-300 font-semibold">'help'</span> or click the command badges below to interact with this shell.
          </p>
        </div>
      ),
    },
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const quickCommands = ['help', 'whoami', 'skills', 'projects', 'certs', 'cv', 'nmap localhost', 'contact', 'clear'];

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-semibold">Available Shell Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono">
              <div><span className="text-cyan-300 font-bold">whoami</span> — Identity & Academic Profile</div>
              <div><span className="text-cyan-300 font-bold">skills</span> — Technical, Cyber & Dev Stack</div>
              <div><span className="text-cyan-300 font-bold">projects</span> — Active Software & Security Works</div>
              <div><span className="text-cyan-300 font-bold">certs</span> — 10 Verified Credentials + INSA</div>
              <div><span className="text-cyan-300 font-bold">cv</span> — View & Download One-Page CV</div>
              <div><span className="text-cyan-300 font-bold">nmap localhost</span> — Simulated Port & Service Scan</div>
              <div><span className="text-cyan-300 font-bold">cat goals.txt</span> — Professional Vision & Ambitions</div>
              <div><span className="text-cyan-300 font-bold">contact</span> — Reach Samuel directly</div>
              <div><span className="text-cyan-300 font-bold">clear</span> — Wipe terminal logs</div>
              <div><span className="text-cyan-300 font-bold">exit</span> — Close terminal</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="space-y-1 text-xs text-slate-200">
            <p><span className="text-cyan-400 font-bold">Subject:</span> {personalInfo.fullName}</p>
            <p><span className="text-cyan-400 font-bold">Role:</span> {personalInfo.title}</p>
            <p><span className="text-cyan-400 font-bold">Institution:</span> {personalInfo.university}, Ethiopia ({personalInfo.academicStatus})</p>
            <p><span className="text-cyan-400 font-bold">Security Exposure:</span> INSA Cyber Talent Summer Camp (5th Batch Alum)</p>
            <p><span className="text-cyan-400 font-bold">Core Focus:</span> External/Internal/Web Penetration Testing, Full-Stack Engineering, AI Sec, Piano & Design</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">Technical Stack Breakdown:</p>
            <div>
              <span className="text-emerald-400 font-mono font-semibold">[Cybersecurity]:</span> Kali Linux, OWASP Web Sec, Nmap, Burp Suite, Wazuh SIEM, Suricata, Sysmon, MITRE ATT&CK.
            </div>
            <div>
              <span className="text-cyan-300 font-mono font-semibold">[Full-Stack]:</span> React, Node.js, Express, TypeScript, MERN, Tailwind CSS, REST APIs.
            </div>
            <div>
              <span className="text-blue-400 font-mono font-semibold">[Mobile & DB]:</span> Flutter, Dart, Neon PostgreSQL, MongoDB, Firebase Firestore, MySQL.
            </div>
            <div>
              <span className="text-purple-400 font-mono font-semibold">[Languages & OS]:</span> Python, Java (OOP/MVC), C++, PHP, JavaScript, Linux, VirtualBox, WSL2.
            </div>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-bold">Key Engineered Systems:</p>
            {projectsData.slice(0, 5).map((p) => (
              <div key={p.id} className="border-l-2 border-cyan-500/40 pl-2">
                <span className="text-slate-100 font-semibold">{p.title}</span>
                <p className="text-slate-400 text-[11px]">{p.description}</p>
                <div className="flex gap-2 mt-0.5">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                      [Live Demo]
                    </a>
                  )}
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-300">
                      [GitHub Repo]
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
        response = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">Verified Credentials (10 + INSA):</p>
            <div className="space-y-1">
              {certificatesData.map((c, i) => (
                <div key={c.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] border-b border-slate-800/80 py-0.5">
                  <span>
                    <strong className="text-cyan-300">#{i + 1} {c.title}</strong> — <span className="text-slate-400">{c.issuer}</span>
                  </span>
                  {c.verifyUrl ? (
                    <a href={c.verifyUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
                      Verify &rarr;
                    </a>
                  ) : (
                    <span className="text-cyan-500">{c.badge || 'Verified'}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'nmap localhost':
      case 'nmap':
        response = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-emerald-400">Starting Nmap 7.94 ( https://nmap.org ) at {new Date().toISOString()}</p>
            <p className="text-slate-400">Nmap scan report for samuel-lab (127.0.0.1)</p>
            <p className="text-slate-400">Host is up (0.00012s latency).</p>
            <div className="py-1">
              <p className="text-cyan-400">PORT     STATE SERVICE       VERSION</p>
              <p>22/tcp   <span className="text-emerald-400">open</span>  ssh           OpenSSH (Linux/Kali)</p>
              <p>80/tcp   <span className="text-emerald-400">open</span>  http          Nginx (Reverse Proxy)</p>
              <p>443/tcp  <span className="text-emerald-400">open</span>  https         TLS v1.3 (Secure Web)</p>
              <p>3000/tcp <span className="text-emerald-400">open</span>  react         Vite React Frontend</p>
              <p>5432/tcp <span className="text-emerald-400">open</span>  postgresql    Neon Serverless DB</p>
              <p>55000/tcp <span className="text-emerald-400">open</span> wazuh-api     Wazuh Security Monitoring</p>
            </div>
            <p className="text-emerald-400">[+] Security status: Active Defensive Shielding & MITRE Monitoring.</p>
          </div>
        );
        break;

      case 'cat goals.txt':
      case 'goals':
        response = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">[Career Vision & Milestones]:</p>
            <p>1. Earn prestigious Cybersecurity & Software Engineering internship (INSA / Global Tech).</p>
            <p>2. Advance practical proficiency in External, Internal, and Web App Penetration Testing.</p>
            <p>3. Build secure, high-uptime digital solutions solving real community & enterprise challenges.</p>
            <p>4. Pioneer AI-assisted telemetry and intelligent SOC analysis methodologies.</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">Contact Coordinates:</p>
            <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-cyan-300 hover:underline">{personalInfo.email}</a></p>
            <p>Phone: <a href={`tel:${personalInfo.phone}`} className="text-cyan-300 hover:underline">{personalInfo.phone}</a></p>
            <p>Telegram: <a href={personalInfo.telegram} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{personalInfo.telegramHandle}</a></p>
            <p>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">samuel-woldemeskel-956727354</a></p>
            <p>GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">github.com/Samieyu</a></p>
          </div>
        );
        break;

      case 'cv':
      case 'resume':
      case 'cat cv.txt':
        response = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">[Curriculum Vitae / Resume]:</p>
            <p className="text-slate-300">Samuel Woldemeskel Wolde — 4th-Year Software Engineering (Wachemo Univ) & INSA Cyber Talent Alum.</p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={personalInfo.cvPath}
                download="Samuel_Woldemeskel_CV.pdf"
                className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30"
              >
                [Download PDF CV]
              </a>
              <a
                href={personalInfo.cvGoogleDocsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 hover:text-cyan-300"
              >
                [Open Google Docs Live]
              </a>
            </div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        response = (
          <div className="text-xs text-rose-400">
            bash: {trimmed}: command not found. Type <span className="text-cyan-300 font-semibold underline cursor-pointer" onClick={() => executeCommand('help')}>'help'</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className={`w-full bg-[#090d16] border border-cyan-500/30 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? 'h-[95vh] max-w-6xl' : 'h-[540px] max-w-3xl'
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d1424] border-b border-cyan-500/20 select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-semibold text-slate-200">
              samuel@sec-station: ~ (zsh / kali-lab)
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
              ACTIVE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              aria-label="Toggle Fullscreen"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-rose-950/40"
              aria-label="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Pills */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-[#0b101c] border-b border-slate-800/80 overflow-x-auto text-xs font-mono scrollbar-none">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-1">
            <Sparkles className="w-3 h-3 text-cyan-400" /> Quick:
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 rounded text-[11px] bg-slate-800/80 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-slate-700 hover:border-cyan-500/40 transition-colors whitespace-nowrap"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 font-mono overflow-y-auto space-y-3 bg-[#070b14]/90 text-sm">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 text-xs">
                <span className="text-emerald-400">samuel@sec-station</span>
                <span className="text-slate-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-300">$</span>
                <span className="text-slate-100 font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center px-4 py-2.5 bg-[#0d1424] border-t border-cyan-500/20 font-mono text-xs">
          <span className="text-emerald-400 mr-1.5">samuel@sec-station</span>
          <span className="text-slate-500 mr-1.5">:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-slate-100 focus:outline-none caret-cyan-400 placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="p-1 rounded hover:bg-cyan-500/20 text-cyan-400"
            aria-label="Submit Command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};

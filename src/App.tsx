import "./App.css";
import Snowfall from "react-snowfall";
// import { FallingLeaves } from "falling-leaves/react";

export default function App() {
  return (
    <main>
      {/* <FallingLeaves fullScreen shapes={["maple"]} speed={100} /> */}
      <Snowfall
        // Changes the snowflake color
        color="white"
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={28}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
      <header>
        <h1>Aleksandr Zheleznov</h1>
        <p className="lead">
          Security Service Manager & SOC Team Lead. I build and run security
          operations for Microsoft-centric environments.
        </p>
        <ul className="links">
          <li>
            <a href="mailto:aleksandr.zheleznov03@gmail.com">
              aleksandr.zheleznov03@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aleksandr-zheleznov4920/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Aleks4920">GitHub</a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/2506.09381">Publication</a>
          </li>
        </ul>
      </header>

      <section>
        <h2>About</h2>
        <p>
          I lead security operations for organizations that cannot afford to
          guess. My work covers detection engineering, incident response and
          cloud security across multi-tenant Microsoft environments (Sentinel,
          Defender, Entra ID, Azure). I prefer simple security: clear processes
          and native tooling used well.
        </p>
        <p>
          I am completing an MSc in Computer Science (Security) at the
          University of Bern, with a focus on applied cryptography, privacy and
          usable security. I work in English, Russian, French (intermediate) and
          German (beginner).
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="card">
          <h3>Security Service Manager & SOC Team Lead, CrucialLogics</h3>
          <p className="meta">Apr 2026 – Present</p>
          <ul>
            <li>
              Lead the SOC-as-a-Service offering and the SOC team, owning
              detection strategy, client onboarding and SLA governance.
            </li>
            <li>
              Cut mean time to respond from ~5 hours to ~1 hour and the
              false-positive rate from ~99% to ~80%, while sustaining 100% SLA
              attainment.
            </li>
            <li>
              Oversee ~300 incidents per week; built ~50 custom analytics rules
              and tune ~6 every month.
            </li>
            <li>
              Built an AI triage automation inside Azure (GPT, Logic Apps,
              storage accounts) that gives analysts a summary and first
              investigation; cut alert investigation time by ~50%.
            </li>
            <li>
              Built Logic App automations that sync tickets across Microsoft
              Sentinel, Autotask and Zenduty.
            </li>
            <li>
              Modernized the GitHub-based PowerShell and ARM-template pipeline
              that deploys detection rules to every customer, moving it from
              Azure Lighthouse to Defender with Unified RBAC; leading the
              migration to the Defender portal.
            </li>
            <li>
              Map detection coverage to MITRE ATT&CK and report posture to
              client leadership with Power BI dashboards and an SLA workbook.
            </li>
            <li>
              Implemented Privileged Identity Management (PIM) for SOC analyst
              access and prepared evidence for the company's successful
              Microsoft Azure Expert MSP audit.
            </li>
          </ul>
        </div>
        <div className="card">
          <h3>Cloud Security Analyst Consultant, CrucialLogics</h3>
          <p className="meta">May 2023 – Apr 2026</p>
          <ul>
            <li>
              Defended multiple client Microsoft tenants with Defender and
              Sentinel.
            </li>
            <li>
              Built custom analytics rules and response playbooks; 99% SLA
              satisfaction.
            </li>
          </ul>
        </div>
        <div className="card">
          <h3>IT & Security Consultant, Orbital Installation Technologies</h3>
          <p className="meta">Sep 2023 – Present</p>
          <ul>
            <li>
              Hardened SMS flows against toll fraud, deployed SPF, DKIM and
              DMARC, and fixed a broken access-control misconfiguration.
            </li>
            <li>
              Built ~50 automated workflows saving ~40 hours per week; migrated
              field forms to self-hosted Form.io on AWS.
            </li>
            <li>
              Built parts of a separate demo environment for the company's SaaS
              platform on AWS ECS: a demo secrets option and an ECS Exec
              workflow in GitHub Actions, using an OIDC role scoped to the dev
              and demo clusters.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Research & writing</h2>
        <div className="card">
          <h3>
            <a href="https://arxiv.org/abs/2506.09381">
              Binary classification for perceived quality of headlines and links
              on worldwide news websites, 2018-2024
            </a>
          </h3>
          <p className="meta">arXiv 2506.09381, 2025. Co-author.</p>
          <p>
            Twelve classification algorithms evaluated on 115 linguistic
            features across about 57.5 billion news items. The best model, a
            fine-tuned DistilBERT, reached 90.3% accuracy.
          </p>
        </div>
        <div className="card">
          <h3>
            Microsoft Intune: Centralized Endpoint and Privilege Management
          </h3>
          <p className="meta">CrucialLogics, Crucial Insights</p>
          <p>
            Five principles for governing endpoints and privileges centrally.
          </p>
        </div>
        <div className="card">
          <h3>Security research projects</h3>
          <ul>
            <li>
              Phishing-resistant authentication: FIDO2/WebAuthn and OpenPGP
              deployment trade-offs.
            </li>
            <li>
              Offline CBDC payments (MSc thesis, in progress): security analysis
              of ePrint 2024/1746, showing that its anonymity proofs assume
              static corruption.
            </li>
            <li>
              Confidential computing: a self-hosted stack on Intel TDX with
              remote attestation.
            </li>
            <li>
              <a href="https://github.com/Aleks4920/Privacy-Poker">
                Privacy Poker
              </a>
              : a browser game that teaches informed consent and data
              minimisation.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="card">
          <h3>
            MSc Computer Science, Specialization in Security, University of Bern
          </h3>
          <p className="meta">Sep 2025 – Jun 2027 (expected)</p>
          <p>
            Thesis (in progress): Secure and Privacy-preserving CBDC Offline
            Payments using a Secure Element.
          </p>
        </div>
        <div className="card">
          <h3>
            Honours BSc Computer Science (Minor in Criminology), Lakehead
            University
          </h3>
          <p className="meta">2023 – 2025</p>
        </div>
        <div className="card">
          <h3>
            Ontario College Diploma, Computer Programming (Co-op), Georgian
            College
          </h3>
          <p className="meta">2021 – 2023</p>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="tags">
          <li>Microsoft Sentinel</li>
          <li>Defender XDR</li>
          <li>KQL</li>
          <li>Detection engineering</li>
          <li>Incident response</li>
          <li>Threat hunting</li>
          <li>MITRE ATT&CK</li>
          <li>Entra ID</li>
          <li>PIM</li>
          <li>Azure</li>
          <li>AWS</li>
          <li>GCP</li>
          <li>Intune</li>
          <li>Power BI</li>
          <li>GitHub Actions</li>
          <li>NIST CSF</li>
          <li>GDPR</li>
          <li>Python</li>
          <li>PowerShell</li>
          <li>Bash</li>
          <li>Docker</li>
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul className="tags">
          <li>CompTIA Security+</li>
          <li>SC-200</li>
          <li>AZ-104</li>
          <li>SC-900</li>
          <li>AZ-900</li>
          <li>Google Cybersecurity</li>
          <li>Security Blue Team: Digital Forensics</li>
          <li>Security Blue Team: Network Analysis</li>
          <li>Cisco Cybersecurity Essentials</li>
          <li>CS50</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Open to security operations, cloud security, GRC and cyber risk roles,
          including in finance. Email{" "}
          <a href="mailto:aleksandr.zheleznov03@gmail.com">
            aleksandr.zheleznov03@gmail.com
          </a>{" "}
          or message me on{" "}
          <a href="https://www.linkedin.com/in/aleksandr-zheleznov4920/">
            LinkedIn
          </a>
          .
        </p>
        <p className="note">Percentages marked with ~ are estimates.</p>
      </section>
    </main>
  );
}

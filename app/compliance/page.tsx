export const metadata = {
  title: "Políticas e Compliance | Brüder Capital",
}

const documents = [
  {
    name: "Formulário de Referência",
    href: "/04%20-%20FORMULARIO%20DE%20REFERENCIA%20-%20BRUDER%20CAPITAL.pdf",
  },
  {
    name: "Código de Ética e Conduta",
    href: "/06%20-%20CODIGO%20DE%20ETICA%20E%20CONDUTA%20-%20BRUDER%20CAPITAL.pdf",
  },
  {
    name: "Política de Compliance e Controles Internos",
    href: "/07%20-%20POLITICA%20DE%20COMPLIANCE%20E%20CONTROLES%20INTERNOS%20-%20BRUDER%20CAPITAL.pdf",
  },
  {
    name: "Política de Segurança da Informação e LGPD",
    href: "/08%20-%20POLITICA%20DE%20SEGURANCA%20DA%20INFORMACAO%20E%20LGPD%20-%20BRUDER%20CAPITAL.pdf",
  },
  {
    name: "Política de PLD e KYC",
    href: "/09%20-%20POLITICA%20DE%20PLD%20KYC%20-%20BRUDER%20CAPITAL.pdf",
  },
  {
    name: "Política de Investimentos Pessoais e da Empresa",
    href: "/10%20-%20POLITICA%20DE%20INVESTIMENTOS%20PESSOAIS%20E%20DA%20EMPRESA%20-%20BRUDER%20CAPITAL.pdf",
  },
  {
    name: "Política de Suitability",
    href: "/11%20-%20POLITICA%20DE%20SUITABILITY%20-%20BRUDER%20CAPITAL.pdf",
  },
]

const pageStyle = {
  backgroundColor: "#2b3540",
  color: "#ffffff",
  fontFamily: "'Helvetica Neue', Arial, sans-serif",
  minHeight: "100vh",
}

export default function Compliance() {
  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 24px 100px" }}>
        <a
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "48px",
            fontSize: "13px",
            letterSpacing: "1px",
            color: "#8b96a3",
            textDecoration: "none",
          }}
        >
          {"← brüder capital"}
        </a>
        <h1 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "12px" }}>
          Políticas e Compliance
        </h1>
        <p style={{ fontSize: "14px", color: "#8b96a3", marginBottom: "48px", lineHeight: 1.6 }}>
          Documentos institucionais, regulatórios e de governança da Brüder Capital.
        </p>
        <ul style={{ listStyle: "none" }}>
          {documents.map((document) => (
            <li
              key={document.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: "20px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span style={{ fontSize: "15px", color: "#ffffff" }}>{document.name}</span>
              <a
                href={document.href}
                target="_blank"
                rel="noopener"
                style={{
                  fontSize: "13px",
                  color: "#ffffff",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.25)",
                  padding: "6px 14px",
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                }}
              >
                Baixar PDF
              </a>
            </li>
          ))}
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              padding: "20px 0",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span style={{ fontSize: "15px", color: "#ffffff" }}>Política de Gestão de Riscos</span>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                color: "#8b96a3",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Em breve
            </span>
          </li>
        </ul>
        <p style={{ marginTop: "56px", fontSize: "13px", color: "#8b96a3", lineHeight: 1.6 }}>
          Para solicitar informações ou documentos adicionais, entre em contato pelo e-mail{" "}
          <a href="mailto:contato@brudercapital.com.br" style={{ color: "#ffffff" }}>
            contato@brudercapital.com.br
          </a>
          .
        </p>
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#2b3540",
        color: "#ffffff",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ padding: "60px 90px", marginBottom: "40px" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 700,
              letterSpacing: "-1.5px",
              lineHeight: 1,
            }}
          >
            brüder
          </div>
          <div
            style={{
              fontSize: "18px",
              letterSpacing: "8px",
              fontWeight: 400,
              color: "#ffffff",
              marginTop: "16px",
            }}
          >
            CAPITAL
          </div>
        </div>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#8b96a3",
            marginBottom: "12px",
          }}
        >
          EM BREVE
        </div>
        <div style={{ fontSize: "15px", color: "#ffffff" }}>
          <a
            href="mailto:contato@brudercapital.com.br"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            contato@brudercapital.com.br
          </a>
        </div>
        <div style={{ marginTop: "20px" }}>
          <a
            href="/compliance"
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              color: "#8b96a3",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            Políticas e Compliance
          </a>
        </div>
      </div>
    </div>
  )
}

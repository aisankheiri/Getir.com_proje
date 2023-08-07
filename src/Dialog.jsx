function Dialog({ message ,onDialog }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "40%",
          left: "30%",
          transform: "tarslate(-50%,-50%)",
          background: "white",
          padding: "50px",
        }}
      >
        <h3 style={{ color: "black" }}>{message}</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button onClick={()=>onDialog(false)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#FFFFFF",
              color: "#5D3EBC",
              height: "34px",
              width: "180px",
              marginTop: "1rem",
              marginRight: "2rem",
              borderRadius: "9px",
              border: "1px solid #5D3EBC",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#FFFFFF";
              e.target.style.color = "#946FF9";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#FFFFFF";
              e.target.style.color = "#5D3EBC";
            }}
          >
            Hayır
          </button>
          <button onClick={()=>onDialog(true)} 
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#5D3EBC",
              color: "white",
              height: "34px",
              width: "180px",
              marginTop: "1rem",
              borderRadius: "9px",
              border: "1px",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#7849F7";
              e.target.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#5D3EBC";
              e.target.style.color = "#FFFFFF";
            }}
          >
            Evet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;

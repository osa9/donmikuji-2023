export interface AnyShareProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  text: string;
}

export const AnyShare: React.FC<AnyShareProps> = ({ url, text, ...props }) => (
  <div {...props}>
    <div>
      <textarea
        defaultValue={text}
        style={{
          width: "600px",
          maxWidth: "90vw",
        }}
        className="text-black text-base"
        onFocus={(e) => e.target.select()}
      />
    </div>
    <div>
      <button
        type="button"
        onClick={(e) => {
          window.open(url, "", "width=500,height=750");
          e.preventDefault();
          return false;
        }}
        style={{ color: "white", textDecorationLine: "none" }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#000080",
            padding: "4px",
            margin: "4px 6px",
            borderRadius: "5px",
            textAlign: "center",
            width: "80px",
            lineHeight: "7px",
            fontFamily: "Avenir,Helvetica,Arial,sans-serif",
          }}
        >
          <img
            src="https://anypost.dev/external-assets/share.svg"
            width="14"
            alt="share"
          />
          Share
          <div style={{ fontSize: "0.5em" }}>via anypost.dev</div>
        </div>
      </button>
    </div>
  </div>
);
export default AnyShare;

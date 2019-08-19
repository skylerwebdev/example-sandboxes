import React from "react";

export default function DebugProps(props) {
  return (
    <section style={{ textAlign: "left" }}>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </section>
  );
}

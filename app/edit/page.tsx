import Link from "next/link";
import { useState } from "react";
import Grid from "./_components/grid";

export default function EditPage() {
  return (
    <main style={styles.container}>
      <h1>Edit Page</h1>
      <Grid/>
      <Link href="/">
        <button style={styles.button}>
          Back to Home
        </button>
      </Link>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

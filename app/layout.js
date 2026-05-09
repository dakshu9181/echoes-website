export const metadata = {
  title: "Echoes of a Better Dawn",
  description: "Official author website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

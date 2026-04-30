export const metadata = {
  title: "Joe’s Grows Cheat Sheet",
  description: "Free plant deficiency cheat sheet from Joe’s Grows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

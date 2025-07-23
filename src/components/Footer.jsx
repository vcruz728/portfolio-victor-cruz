export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-800 text-center py-6 border-t dark:border-zinc-700">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Victor Cruz. All rights reserved.
      </p>
    </footer>
  );
}

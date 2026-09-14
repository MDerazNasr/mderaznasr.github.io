"use client";

import { useEffect, useRef, useState } from "react";

const email = "mderaznasr@gmail.com";

export function EmailCopyButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement("textarea");
      input.value = email;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }

    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      className="text-button"
      type="button"
      onClick={copyEmail}
      aria-label={copied ? `Copied ${email}` : `Copy ${email} to clipboard`}
    >
      {copied ? "Copied" : "Email"}
    </button>
  );
}

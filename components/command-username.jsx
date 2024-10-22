"use client";

import { useEffect, useState } from "react";

export function CommandUsername() {
  const [spinner, setSpinner] = useState(0);
  const spinnerChars = ["/", "—", "\\", "|"];

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinner((prev) => (prev + 1) % spinnerChars.length);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-green-400">
      user@taufiqdp:~$ {spinnerChars[spinner]}
    </span>
  );
}

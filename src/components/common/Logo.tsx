import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <a href="/">
        <Image
          aria-hidden
          src="/logo.png"
          alt="File icon"
          width={64}
          height={64}
          className="mx-auto"
        />
      </a>
    </div>
  );
}

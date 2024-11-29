interface TokenIconProps {
  src: string;
  alt: string;
  size?: number;
}

export function TokenIcon({ src, alt, size = 24 }: TokenIconProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-full"
      style={{ width: size, height: size }}
      onError={(e) => {
        e.currentTarget.src = 'https://cryptologos.cc/logos/question-mark.png';
      }}
    />
  );
}
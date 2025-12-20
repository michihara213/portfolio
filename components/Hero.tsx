type HeroProps = {
  nameJa: string;
  nameRoman: string;
  affiliation: string;
  oneLine?: string;
  photoSrc: string;
};

export function Hero({
  nameJa,
  nameRoman,
  affiliation,
  oneLine,
  photoSrc,
}: HeroProps) {
  return (
    <header className="hero heroCenter">
      <div className="avatar">
        <img src={photoSrc} alt={`${nameJa}の顔写真`} />
      </div>

      <div className="heroText">
        <div className="hero-name">
          {nameJa}
          <span className="hero-roman"> {nameRoman}</span>
        </div>

        <div className="hero-meta">{affiliation}</div>

        {oneLine ? <div className="hero-one-line">{oneLine}</div> : null}
      </div>
    </header>
  );
}
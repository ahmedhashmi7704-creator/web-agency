const items = [
  'Est. 2018', 'Senior craft, every project', '40+ brands shipped',
  'Strategy → Design → Growth', 'Remote, worldwide', 'Direct access to the team',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <span className="marquee__dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
